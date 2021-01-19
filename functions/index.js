const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51IABh1LStO9zoQRRMY7p0869fXMjelukw4dWJVh7cSINPB6oiqFIEbiqVLWVvDrLnGxF95rl1e1WogHAtWCUCqVl002uD2oAhL")

//Api 
//app config
const app = express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());
//api routes
app.get('/',(request,response)=>response.status(200).send("hello world"))
app.post('/payments/create',async (request,response) => {

    const total = request.query.total;

    console.log("Payment request recieved boom!!! for this amount>>>>",total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

  response.status(201).send({
     clientSecret:paymentIntent.client_secret, 
  })
})
//listen commands
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/indiamart-5e9a0/us-central1/api
import { Divider } from "@material-ui/core";
import React,{useState} from "react";
import "./Payment.css";
import {useStateValue} from "../StateProvider"
import CheckOutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom"
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";

const Payment =()=>{
    const [{basket,user},dispatch] = useStateValue();

    const stripe= useStripe();
    const elements = useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);

    const handleSubmit = e => {
        //do all fancy stripe stuff
    }
    const handleChange = event => {
        //Listen for changes in the card element
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return(
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to="/checkout">{basket?.length}</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles,California</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {basket.map(item=>(
                            <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*Stripe Payment gateway */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Payment;

{/* payment section - delivery address */}
{/* payment section - review section */}
{/* payment section - payment method */}

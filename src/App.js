import React,{useEffect} from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import CheckOut from "./CheckOut"
import Footer from "./layouts/Footer"
import Login from "./layouts/Login"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider";
import Payment from "./layouts/Payment"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("");

function App() {
const[{},dispatch] = useStateValue();
  useEffect(()=>{
    //will only run once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>',authUser);

      if(authUser){
        //the user just logged in /the user was logged in
        
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
      }
    )
  },[])
  return (
    //BEM
    <Router>
    <div className="App">
   
    
      <Switch>
      <Route path = "/login"><Login/></Route> 
      <Route path = "/CheckOut"><Header/><CheckOut/></Route> 
      <Route path = "/payment"><Header/><Elements stripe={promise}><Payment/></Elements></Route> 
      <Route path="/"><Header/><Home/><Footer/></Route>
      </Switch>
      
     </div>
    </Router>
  );
}

export default App;

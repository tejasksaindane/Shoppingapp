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
import Orders from "./Orders"
import Example from './layouts/Carousel'

const promise = loadStripe("pk_test_51IABh1LStO9zoQRRT81ooFD1qUkbclD1x0NjmFLZEOHz5Hr1KIPIbxzrOYyynubo6pLaZm1Gv3zPfUsUlmXe8Vmi00CzGkiiAZ");

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
      <Route exact path = "/orders"><Header/><Orders/></Route> 
      <Route exact path = "/login"><Login/></Route> 
      <Route exact path = "/CheckOut"><Header/><CheckOut/></Route> 
      <Route exact path = '/carousel'><Example/></Route>
      <Route exact path = "/payment"><Header/><Elements stripe={promise}><Payment/></Elements></Route> 
      <Route path="/"><Header/><Example/><Home/><Footer/></Route>
      </Switch>
      
     </div>
    </Router>
  );
}

export default App;
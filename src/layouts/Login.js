import React,{useState} from 'react'
import {auth} from "../firebase"
import "./Login.css"
import {Link ,useHistory} from "react-router-dom"



const Login = () => {
const history = useHistory();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const signIn = e => {
    e.preventDefault()//no refreshing in react
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("./")
        })
        .catch(error => alert(error.message))
    //some fancy firebase stuff goes here
}
const register = e => {
    e.preventDefault()//no refreshing in react
    //some fancy firebase stuff goes here
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
       // it successfully created user with email and password
       
        if(auth){
            history.push('/')
        }
    })
    .catch(error=>alert(error.message))
}
    return (
        <div className="login">
            <Link to="/">
            <img src="https://assets2.lottiefiles.com/temp/lf20_dQChFA.json" className="login__logo" alt=""/>
            </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form  >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button
                onClick={signIn}
                type="submit"
                className="login__signinButton">
                    Sign in
                </button>
            </form>
            <p>By signing in you agree to IndiaMarts fake app Conditions of the Use & Sale. Please see our Privacy Notice ,our Cookies Notice and our Interest-Based Ads </p>
        <button 
        onClick = {register}
        className = "login__registerButton">Create your Indiamart Account</button>
        </div>
        </div>
    )
}



export default Login;
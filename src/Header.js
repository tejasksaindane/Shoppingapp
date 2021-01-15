import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"

const Header = () => {
const[{basket,user},dispatch]= useStateValue();

const handleAuthentication = () =>{
    if (user) {
        auth.signOut();
    }
}
    return (
        <div className="header">
            <Link to="/">
             <img className="header__logo" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/>
            </Link>
            <div className="header__search">
                <input
                className="header__searchInput" type="text"/>
                <SearchIcon className= "header__searchIcon"/>
                {/*logo*/}
            </div>
            <div className="header__nav">
            <Link to={!user && "./login"}>
                   <div onClick={handleAuthentication} className="header__option">
                   <span className="header__optionLineOne"> Hello,{!user ? "Guest" : user.email}</span>
                   <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                   </div> 
            </Link>
            <div className="header__option">
                   <span className="header__optionLineOne"> Returns </span>
                   <span className="header__optionLineTwo">Your Orders</span>
            </div> 

            <div className="header__option">
                   <span className="header__optionLineOne">Yours </span>
                   <span className="header__optionLineTwo">Prime</span>
            </div> 
            <Link to="/CheckOut">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
            </div>
            </Link>
            </div>
        </div>
    )
}



export default Header;
import React from 'react'
import "./CheckOut.css"
import CheckOutProduct from './layouts/CheckoutProduct';
import SubTotal from "./SubTotal"
import {useStateValue} from "./StateProvider";

const CheckOut = () => {
    const [{basket,user},dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className= "checkout__add" src="https://cdn.pixabay.com/photo/2020/04/18/04/21/coke-5057606_1280.jpg" alt=""/>
            <div>
            <h3>Hello,{user?.email}</h3>
                <h2 className="checkout__title">Your Orders >>>>>> ➡ >>>>>></h2>
                
            </div>
            </div>
        <div className="checkout__right">
            <SubTotal/>
            <h2>The total will go here</h2>
            {/* checkOut Product*/}
            {basket.map(item=>(
                <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
          
        </div>
        </div>
    )
}



export default CheckOut;
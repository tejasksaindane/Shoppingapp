import React from 'react'
import "./CheckoutProduct.css"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useStateValue} from "../StateProvider.js"

toast.configure()
const CheckOutProduct = ({id,title,image,price,rating}) => {
    const[{basket},dispatch]= useStateValue();

 const removeFromBasket = ()=>{
     //removeitem from basket
     dispatch({
         type:"REMOVE_FROM_BASKET",
         id:id,
     })
     toast.dark("Product removed successfully",{position:toast.POSITION.BOTTOM_RIGHT});
 }
    return (
        <div className="checkoutproduct">
                <img className= "checkoutproduct__image" src={image} alt=""/>
                <div className="checkoutproduct__info">
                    <p className="checkoutproduct__title">{title}</p>
                    <p className="checkoutproduct__price"><small>₹</small>
                    <strong>{price}</strong>
                    </p>
                <div className="checkoutproduct__rating">
                    {Array(rating)
                    .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                            </div>    
          
                            <button onClick={removeFromBasket}>Remove from Cart</button>
                </div>
        </div>
       
    )
}



export default CheckOutProduct;
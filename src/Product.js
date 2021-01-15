import React from 'react'
import "./Product.css"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useStateValue} from "./StateProvider";

toast.configure()
const Product = ({id,title,image, price,rating}) => {
const [{basket},dispatch]= useStateValue();

    const addToBasket = ()=>{
        // dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
        toast.info("Product added to cart Successfully",{position:toast.POSITION.BOTTOM_LEFT});
    }
    
    return (
        <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                      <small><bold> ₹ </bold></small>
                      <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                       {Array(rating).fill().map((_,i)=>(  <p>⭐</p>))} 
                  
                        
                    </div>
                </div>
                <img src={image} width="300px" height="200px"alt=""/>
                <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}



export default Product;
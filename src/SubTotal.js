import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from "react-currency-format";
import { ShoppingBasket } from '@material-ui/icons';
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer"
import {useHistory} from "react-router-dom"

const SubTotal = () => {
    const history = useHistory();
    const [{basket},dispatch]= useStateValue();
    return (
     <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                {/*Part of the homework */}
                SubTotal ( {basket.length} items):<strong>{value}</strong>
            </p>
            <small className= "subtotal__gift">
                <input type = "checkbox"/>This Order Contains A Gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}//part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
    <button onClick={e=>history.push("./payment")}> Proceed to check </button>
     </div>
    )
}



export default SubTotal;
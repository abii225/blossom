import React from 'react'
import {useContext} from "react";
import { Authcontext } from '../ContextProvider/AuthProvider';
import Styles from "../styles/Cart.module.css";

const Cart = () => {

 const {allData,dispatchReducer}=useContext(Authcontext);

 console.log(allData,"--==--==---===-==----===---====---====-==-")
  return (
   <div>
   <h3>Total:</h3>
   <div id={Styles.cart}>
      {
        allData.cartData?.map((ele)=>(
          
     <div  key={ele.id}className={Styles.card}>
    <h3>{ele.title}</h3> 
    <p>Price : ${ele.price}</p>
    <button className={Styles.button}> Buy
    </button>
    <button className={Styles.Button}> Delete
    </button>
     </div>

        ))
      }
    </div>

   </div>
  )
}

export default Cart
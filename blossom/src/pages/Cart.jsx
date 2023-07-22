import React from 'react'
import {useContext} from "react";
import { Authcontext } from '../ContextProvider/AuthProvider';
import Styles from "../styles/Cart.module.css";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const {allData,dispatchReducer}=useContext(Authcontext);
    console.log(allData,"===========>>>>>from cartpage");
 const navigate=useNavigate();
 const redirectTo=(id)=>{
    navigate(`/shop/singleproduct/checkout/${id}`)
 }
//  console.log(allData,"--==--==---===-==----===---====---====-==-")
  return (
   <div>
    <h1>Shopping Cart</h1>
   <h3>Total:</h3>
   <hr width="80%"/>
   <div id={Styles.cart}>
      {
        allData.data?.map((ele)=>(
          
     <div  key={ele.id}className={Styles.card}>
    <h3>{ele.title}</h3> 
    <p>Price : ${ele.price}</p>
    <button className={Styles.button} onClick={()=>{redirectTo(ele.id)}}> Buy
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
import React, { useContext } from 'react'
import Styles from "../styles/Checkout.module.css"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Authcontext } from '../ContextProvider/AuthProvider'

const Checkout = () => {
 const {id}=useParams();
 const {allData,dispatchReducer}=useContext(Authcontext);
  const [post,setPostData]=useState({});
  const postData=()=>{
       axios.get(`https://blossomdatas.onrender.com/language`)
       .then((response)=>{
        // console.log(response.data,id);
        let data=response.data.filter((ele)=>{
          return ele.id===Number(id)
        })
        console.log(data);
        setPostData(data[0]); //filtered by id remain data[0]\\ canbe desturcture as well <3
       })
  }
 useEffect(()=>{
  postData();
 },[id])

 useEffect(()=>{
// console.log(post,"this data to post");
 },[post])

   const toLearnpage=useNavigate();

   const toggletoLearnPage=()=>{
      toLearnpage(`/learn`)
   }
  return (
    <div>
      <h1>Shopping Cart</h1>
    <hr width="80%"/>
    <div id={Styles.checkout}>
      <div>
        <h2>Payment Method</h2>
        <ul key="checkoutlist" style={{listStyle:"none"}}>
          <li><input type="checkbox" />Credit/Debit card <img src="https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/visa-512.png" width="30" alt="" /></li>
          <li><input type="checkbox" />Upi</li>
          <li><input type="checkbox" />Paytm</li>
          <li><input type="checkbox" />Net banking</li>
          <li><input type="checkbox" />Mobile Wallets</li>
        </ul>
        </div>
        <div>
         <h2>Summary
          Price:{post.price}
          <hr />
          Total:{
            post.price
          }
          <hr />
          <button className={Styles.button}
            onClick={()=>{
            dispatchReducer("subscribe",post);
            alert("data added successfully")
            toggletoLearnPage()
            }}>Confirm</button>
         </h2>
        </div>
    </div>
    </div>
  )
}

export default Checkout
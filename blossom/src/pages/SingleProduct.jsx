import React, { useContext, useReducer, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import Styles from "../styles/SingleProduct.module.css"
import { Link } from 'react-router-dom';
import { Authcontext } from '../ContextProvider/AuthProvider';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const reducer=(state,action)=>{
    
    switch(action.type){
        case "success":{
            return {error:"",loading:false,data:action.payload}
        }
        case "loading":{
            return {...state,error:"",loading:action.payload,data:{}}
        }
        case "error":{
            return {...state,error:action.payload,data:{},loading:false}
        }
        default:{
            throw new Error("The issue is",action)
        }
    }
}

const SingleProduct = () => {
    const {id}=useParams();
    // console.log(id,"from singleproduct");
   
    const initState={
         loading:false,
         data:{},
         error:"",
    }

    const [state,dispatch]=useReducer(reducer,initState);
 const fetchSingleData=()=>{
    dispatch({type:"loading",payload:true})

    axios.get(`https://blossomdatas.onrender.com/language/${id}`)
      
      .then(function (response) {
        // console.log(response,"from single user");
        dispatch({type:"success",payload:response.data});
      })
      .catch(function (error) {
        console.log(error);
        // dispatch({type:"error",payload:error})
      });

 }
const [arr,setArr]=useState([]);

 useEffect(()=>{
    fetchSingleData(id);
 },[]);

 useEffect(()=>{
    // console.log(state)
   let size=new Array(state.data.rating).fill(0)
   setArr(size);
},[state]);
useEffect(()=>{
    // console.log(arr);
},[arr]);

//  ===========================================================
//   autcontext passing to dispatch

const {dispatchReducer}=useContext(Authcontext);

console.log(dispatchReducer,"------------------------------------------===============--------------");

const navigate=useNavigate();
const buyProduct=()=>{
   navigate("/cart")
   let data=state.data;
//    console.log(data,"data");
   console.log(dispatchReducer)
   dispatchReducer("checkout",data)
}


  return (
    <>
    <div>
        { state.loading&&<div className={Styles.loader}>Loading<span></span></div>||
       
    <div id={Styles.main}>
        <div className={Styles.left}>
        <table>
        <tr><h1>{state.data.title}</h1></tr>
        <tr><h1 style={{display:"inline"}}>Rating:</h1>
            {arr.map((ele)=>(
                <img src="https://yourimageshare.com/ib/2FjwnaTHmS.webp" width="30" alt="" />
            ))}
    </tr>
    </table>
        </div>
    
   <div className={Styles.right}><img src={state.data.images} alt="" />
   <button className={Styles.button} onClick={buyProduct}>Buy this Course</button>
   </div>
    </div>
   } 
    { !state.loading&&
   <table className={Styles.table}>
    <ul>What you will learn</ul>
    {
        state.data.milestones?.map((ele)=>(
          <li>{ele}</li>
        ))
    }
   </table>
}
   { !state.loading&&
   <div className={Styles.desc}>
    <h3>Description</h3>
   <p>{state.data.description}</p>
   </div>}
   
    </div>
    </> )
}

export default SingleProduct
import React, { useContext, useReducer } from 'react'
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
    console.log(id,"from singleproduct");
   
    const initState={
         loading:false,
         data:{},
         error:""
    }

    const [state,dispatch]=useReducer(reducer,initState);
 const fetchSingleData=()=>{
    dispatch({type:"loading",payload:true})

    axios.get(`https://blossomdatas.onrender.com/language/${id}`)
      
      .then(function (response) {
        console.log(response,"from single user");
        dispatch({type:"success",payload:response.data});
      })
      .catch(function (error) {
        console.log(error);
        // dispatch({type:"error",payload:error})
      });

 }
 useEffect(()=>{
    fetchSingleData(id);
 },[id]);

 useEffect(()=>{console.log(state)},[state]);


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
    <div>
        { state.loading&&<h1>loadingg...........</h1>}
    <div id={Styles.main}>
        <div className={Styles.left}>
        <table>
        <tr><h1>{state.data.title}</h1></tr>
        <tr><h1>Rating:{state.data.rating}<em>Stars</em></h1></tr>
    </table>
        </div>
   <div className={Styles.right}><img src={state.data.images} alt="" />
   <button className={Styles.button} onClick={buyProduct}>Buy this Course</button>
   </div>
    </div>
   <table className={Styles.table}>
    <ul>What you will learn</ul>
    {
        state.data.milestones?.map((ele)=>(
          <li>{ele}</li>
        ))
    }
   </table>
    </div>
  )
}

export default SingleProduct
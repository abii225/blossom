import React, {  useContext, useEffect, useReducer } from 'react'
import Styles from "../styles/Signup.module.css"
import axios from 'axios';
import { Authcontext } from '../ContextProvider/AuthProvider';



const Signup = () => {

   const {allData,dispatchReducer}=useContext(Authcontext);

   
const reducer=(state,action)=>{
  switch(action.type){
    case "username":{
      return {...state,username:action.payload};
    }
    case "email":{
      return {...state,email:action.payload};
    }
    case "password":{
      return {...state,password:action.payload}
    }
    case "submit":{
      console.log(state);
      const res = axios.post(`https://blossomdatas.onrender.com/users`, 
      {username:state.username,email:state.email,password:state.password,data:[]})
      .then((response)=>{
        console.log(response.status)
       if(response.status===201){
         dispatchReducer("success",state);
       }
       dispatchReducer("done",null)
      })
      .catch(err=>console.log(err));
      // console.log(res);
      return
    }
    default:{
      throw new Error("error occured",action)
    }
  }
}

  const initial={
    // id:Number(Math.random()),
    username:"",
    email:"",
    password:"",
    data:[]
 }
  const [state,dispatch]=useReducer(reducer,initial);  

  

  return (
    <>
   <div className={Styles.form}>
      <div className={Styles.title}>Welcome</div>
      <div className={Styles.subtitle}>Let's create your account!</div>

      <div className={Styles.inputcontainer} id={Styles.ic1}>
        <input placeholder="" type="text" className={Styles.input} id={Styles.firstname} name="username" 
        onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value})}/>
        <div className={Styles.cut}></div>
        <label className={Styles.iLabel} for="firstname">Username</label>
      </div>

      <div className={Styles.inputcontainer} id={Styles.ic2}>
        <input placeholder="" type="text"  className={Styles.input} id={Styles.lastname}name="email" 
        onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value})}/>
        <div className={Styles.cut}></div>
        <label className={Styles.iLabel} for="lastname">E-mail</label>
      </div>
      <div className={Styles.inputcontainer} id={Styles.ic2}>
        <input placeholder="" type="text" className={Styles.input} id={Styles.email} name="password" 
        onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value})}/>
        <div className={Styles.cut} id={Styles.cutshort}></div>
        <label className={Styles.iLabel} for="email">Password</label>
      </div>
      <button className={Styles.submit} type="text" onClick={(e)=>{
        e.preventDefault();
        dispatch({type:"submit"})}}>submit</button>
    </div>
    </>
  )
}

export default Signup
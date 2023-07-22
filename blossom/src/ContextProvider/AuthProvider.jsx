import React, { createContext, useEffect, useReducer ,useState} from 'react'
import axios from 'axios';

export const Authcontext=createContext();



///////////////////////////////////////////////////////////////////////////////////////////////////
const AuthProvider = ({children}) => {
 
const reducermain=(allData,action)=>{
  switch(action.type){
   case "checkout":{
    return {
      ...allData,
      data:[...allData.data,action.payload]
    }
   }
   case "success":{
     
     return {...allData,
       id:action.payload.id,
       username:action.payload.username,
       email:action.payload.email,
       password:action.payload.password
     }
   }
   case "done":{
     
       console.log(allData,"signup Data success"); //here i should make the entire app working
        axios.get(`https://blossomdatas.onrender.com/users?username=${allData.username}&email=${allData.email}`)
        .then((response)=>{
          console.log(response,"\n",allData,"getting data")
          setLogin(true);
        })
        .catch(err=>console.log(err,"this error in getting data"))
        return  //here the entire app gets log,so accordingly we can update user isloggedin? using another reducer.
     }
     case "subscribe":{ //from checkout page &&not taking the allData ,instead single data is putting from checkout post Data.
       
    //  axios.get(`https://blossomdatas.onrender.com/users?id=1&username=${allData.username}&password=${allData.password}`)
    //  .then((res)=>{
    //     newData=[...res.data];
    //  })
      // console.log(action.payload,"this item is going to put request");
      // axios.put(`https://blossomdatas.onrender.com/users?id=1&username=${allData.username}&password=${allData.password}`,
      // {data:[action.payload]})
      // .then(response=>console.log(response))
      // .catch(err=>console.log(err))
      allData.data.filter((ele)=>{
           
      })
      return {...allData,subscribed:[...allData.subscribed,action.payload]}//put request on existing user to update in subscribed datas simultaneuously
     }
   default:{
     throw new Error(action);
   }
  }
}


  const initalDatas={
       id:"",
       email:"",
       username:"",
       password:"",
       data:[] ,
       subscribed:[] //temporary if api not ready, can be used in learn page
  }


  const [allData,dispatch]=useReducer(reducermain,initalDatas);
    const name="abhay";

    const dispatchReducer=(type,payload)=>{
         dispatch({type:type,payload:payload})
    }
    useEffect(()=>{
  console.log(allData)
    },[allData])
/////////////////////////////////////////////////////////////
   const [login,setLogin]=useState(false);
  useEffect(()=>{
 console.log("login is",login)
  },[login])
  /////////////////////////////////////////////////////////
  return (
    <div>
   <Authcontext.Provider value={{allData,dispatchReducer,login,setLogin}}>
    {children}
   </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
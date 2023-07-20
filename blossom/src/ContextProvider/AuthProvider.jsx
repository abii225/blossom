import React, { createContext, useEffect, useReducer } from 'react'


export const Authcontext=createContext();

const reducermain=(allData,action)=>{
     switch(action.type){
      case "checkout":{
        let newData=[...allData.cartData];
        newData.push(action.payload);
        return {...allData,cartData:newData}
      }
     }
}
const AuthProvider = ({children}) => {
 
  const initalDatas={
       cartData:[]
  }
  const [allData,dispatch]=useReducer(reducermain,initalDatas);
    const name="abhay";

    const dispatchReducer=(type,payload)=>{
         dispatch({type:type,payload:payload})
    }
    useEffect(()=>{
  console.log(allData)
    },[allData])

  return (
    <div>
   <Authcontext.Provider value={{name,dispatchReducer}}>
    {children}
   </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
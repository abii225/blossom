import React, { useContext } from 'react'
import { Authcontext } from '../ContextProvider/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

  const {login}=useContext(Authcontext);
  console.log(login,"authentication data");
  
  if(!login){
    alert("Sorry, You have to login First")
   return  <Navigate to="/login"/>
  }
  return children
}

export default PrivateRoutes
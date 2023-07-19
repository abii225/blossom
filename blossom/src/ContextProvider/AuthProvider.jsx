import React, { createContext } from 'react'


export const Authcontext=createContext();

const AuthProvider = ({children}) => {
    const name="abhay";
  return (
    <div>
   <Authcontext.Provider value={{name}}>
    {children}
   </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
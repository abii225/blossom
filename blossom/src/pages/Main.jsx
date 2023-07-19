import React, { useContext } from 'react'
import Banner from './Banner'
import SectionA from "../pages/SectionA";
import SectionB from "../pages/SectionB";
import { Authcontext } from '../ContextProvider/AuthProvider';


const Main = () => {
   
  const {name}=useContext(Authcontext);
  console.log(name);
  return (
    <>
    <div>
        <Banner/>
        <SectionA/>
        <SectionB/>
    </div>
    </>
  )
}

export default Main
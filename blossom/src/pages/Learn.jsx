import React, { useContext } from 'react'
import { Authcontext } from '../ContextProvider/AuthProvider'
import Styles from "../styles/Learn.module.css";

const Learn = () => {
const {allData}=useContext(Authcontext);
console.log(allData,"from learn page");
  return (
   <>
    <div>Learn
     <h3>Subscribed Courses</h3>
     <div className=''></div>
       {/* {
        allData.subscribed?.map((ele)=>{
            
        })
       } */}
    </div>
   </>
  )
}

export default Learn
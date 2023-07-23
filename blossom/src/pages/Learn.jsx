import React, { useContext } from 'react'
import { Authcontext } from '../ContextProvider/AuthProvider'
import Styles from "../styles/Learn.module.css";
import SingleCard from './SingleCard';
import Footer from './Footer';

const Learn = () => {


const {allData}=useContext(Authcontext);
console.log(allData,"from learn page");
  return (
   <>
    <div>
     <h1 style={{textAlign:"center"}}>Subscribed Courses</h1>
     <div className={Styles.main}>
       {
        allData.subscribed?.map((ele)=>(
           <SingleCard key="learn" subscribed={true} data={ele}/>
            ))
       }
       </div>
       <div>
        
       </div>
    </div>
   
   </>
  )
}

export default Learn
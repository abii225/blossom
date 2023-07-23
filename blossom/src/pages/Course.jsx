import React, { useEffect, useState } from 'react'
import Styles from "../styles/Course.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleProduct from './SingleProduct';

const Course = () => {
 
    const {name}=useParams();
    const [loading,setLoading]=useState(false);
    const [course,setCourse]=useState({});
    const fetchCourse=()=>{
        setLoading(true);
        axios.get(`https://blossomdatas.onrender.com/language?name=${name}`) 
        .then((response)=>{
            console.log(response.data,"-----------------------------------")
           setCourse(response.data[0])
           setLoading(false);
        })
        .catch(err=>console.log(err))
    }

    // ==================================================
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        fetchCourse(name);
        // let newAr=new Array(course.rating).fill(0);
        // setArr(newAr);
console.log("============================================================================================")
        console.log(course,"========from learn page")
    },[]);
    useEffect(()=>{
console.log(course,"chckingg")

    },[course]);
    console.log("============================================================================================")
// ============================================================



  return (
    <>
    {loading&&<h1>loadingggg..........................</h1>||
    <div key={course.name} id={Styles.main}>
    <div className={Styles.left}>
    <table>
    <tr><h1>{course.title}</h1></tr>
    <tr><h1 style={{display:"inline"}}>Rating:</h1>
        {arr.map((ele)=>(
            <img src="https://yourimageshare.com/ib/2FjwnaTHmS.webp" width="30" alt="" />
        ))}
</tr>
</table>
</div>

<content>
<iframe src={`${course.videos}`} style={{display:"block",margin:"auto"}} width="1000" height="600">
</iframe>
<p>Learn {name} - Rosetta Stone Live Lecture Series from Rosetta Stone</p>
</content>
<div className={Styles.desc}>
<h3>Description</h3>
   <p>{course.description}</p> 
   </div>
</div>
    
    }
    </>
  )
}

export default Course
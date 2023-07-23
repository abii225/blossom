import React from 'react'
import Styles from "../styles/Shop.module.css"
import Category from './Category'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import SingleCard from './SingleCard';
import Footer from './Footer';

const Shop = () => {
// vimeo player check
// <iframe src="https://player.vimeo.com/video/50193444?h=663a04d54f" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
// <p><a href="https://vimeo.com/50193444">Learn French - How to Introduce Yourself in French</a> from <a href="https://vimeo.com/innovativelanguage">Innovative Language Learning</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

const [load,setLoad]=useState(false);
const [data,setData]=useState([]);
const [language,setLanguage]=useState([]);

const fetchData=()=>{
  setLoad(true);
  axios.get('https://blossomdatas.onrender.com/language')
  .then(function (response) {
    // console.log(response);
    // console.log(response.data)
    let languages=[];
     response.data.map((ele)=>{
          languages.push(ele.name);
    })
    // console.log(languages);
    setData(response.data);
    setLanguage(languages);
    setLoad(false);
  })
  .catch(function (error) {
    console.log(error);
  });
}
useEffect(()=>{
  fetchData();
},[])

useEffect(()=>{console.log(data,language)},[data,language,load]);

const filterByLanguage=(e)=>{
  // console.log(e.target.textContent);
  setLoad(true);
  // https://blossomdatas.onrender.com/language?name=French
  axios.get(`https://blossomdatas.onrender.com/language?name=${e.target.textContent}`)
  .then(function (response) {
    // console.log(response);
    // console.log(response.data)
      // console.log(response.data)
      setData(response.data);
      setLoad(false);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  return (
    <>
    <div>
    <h1 style={{textAlign:"center"}}>Shop your Language</h1>
   <hr width="80%"/>
    <div className={Styles.search}>
    <div className={Styles.inputgroup}>
    <input type="email" className={Styles.input} id={Styles.Email} name="Email" placeholder="Search here" autocomplete="off"/>
    <input className={Styles.buttonsubmit} value="Search" type="submit"/>
    </div>
    </div>

   <div className={Styles.parent}>
    <div className={Styles.leftcategory}>
      <Category key="category" data={language} fltrLanguage={filterByLanguage}/>
      <button className={Styles.reset} onClick={()=>fetchData()}>Reset</button>
    </div>
    <div className={Styles.rightCard}>
      
  {
    load&&<div className={Styles.loader}>Loading
    <span></span>
  </div>||
    data?.map((item)=>(
      <SingleCard key={item.id} data={item} />
    ))
  }       
   
    
    </div>
   </div>
    </div>
    </>)

}

export default Shop
import React from 'react'
import Styles from "../styles/category.module.css"

const Category = (props) => {
  let data=[...props.data];
// console.log(props.fltrLanguage)
  return (
    <div>
      <ul className={Styles.frame}>
        <h1 >Rating</h1>
        <li key="1" className={Styles.hover}>5 star</li>
        <li key="2" className={Styles.hover}>4 star</li>
        <li key="3" className={Styles.hover}>3 star</li>
      </ul>
      <ul className={Styles.frame}>
        <h1>Languages </h1>
       {
        data.map((ele,index)=>(
          <li key={ele} className={Styles.hover}  onClick={props.fltrLanguage}>{ele}</li>
        ))
       }
      </ul>
    </div>
  )
}

export default Category
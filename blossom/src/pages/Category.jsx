import React from 'react'

const Category = (props) => {
  let data=[...props.data];
// console.log(props.fltrLanguage)
  return (
    <div>
      <ul>Rating
        <li key="1">5 star</li>
        <li key="2">4 star</li>
        <li key="3">3 star</li>
      </ul>
      <ul>Languages
       {
        data.map((ele,index)=>(
          <li key={ele}  onClick={props.fltrLanguage}>{ele}</li>
        ))
       }
      </ul>
    </div>
  )
}

export default Category
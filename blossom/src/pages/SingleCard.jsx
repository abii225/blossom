import React from 'react'
import Styles from "../styles/SingleCard.module.css"

const SingleCard = (props) => {
    let data={...props.data};
  return (
    <div id={Styles.card}>
        <div className={Styles.image}><img src="" alt="" /></div>
   <table className={Styles.table}>
   <tr>
    <td>Title :</td><td>{data.title}</td>
   </tr>
   <tr>
    <td>Language:</td><td>{data.name}</td>
   </tr>
   <tr>
    <td>Contents:</td><td>{data.content}</td>
   </tr>
   <tr>
    <td>Price:</td>
    <td>44</td>
    <td>View</td>
   </tr>
   </table>

    </div>
  )
}

export default SingleCard
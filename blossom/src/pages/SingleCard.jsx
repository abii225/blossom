import React from 'react'
import Styles from "../styles/SingleCard.module.css"
import { Link } from 'react-router-dom';

const SingleCard = (props) => {
    let data={...props.data};
  return (
    <div id={Styles.card}>
        <div className={Styles.image}><img src={data.images[0]} alt="" /></div>
   <table className={Styles.table}>
   <tr>
    <td>Title :</td><td>{data.title}</td>
   </tr>
   <tr>
    <td>Language:</td><td>{data.name}</td>
   </tr>
   <tr>
    <td>Contents:</td><td>{data.content}</td><td>Rating: {data.rating}</td>
   </tr>
   <tr>
    <td>Price:</td>
    <td>{data.price}</td>
   {
    props.subscribed&& <td><Link to={`/course/${data.name}`}>View Content</Link></td>||
    <td><Link to={`/shop/singleproduct/${data.id}`}><button className={Styles.reset} >View</button></Link></td>
    
   }
   
   </tr>
   </table>

    </div>
  )
}

export default SingleCard
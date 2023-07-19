import React from 'react'
import Styles from "../styles/Navbar.module.css"

const navlinks=[
    {title:"Home",link:""},
    {title:"Learn",link:""},
    {title:"Mentors",link:""},
    {title:"Prices",link:""},
    {title:"About",link:""}
]
const Navbar = () => {


  return (
    <>
    <div id={Styles.navbar}>
    <div className={Styles.navLeft}><img src="https://yourimageshare.com/ib/B6v5d0XyPV.webp" alt="icon" /></div>
    <div className={Styles.midNav}>
    {
        navlinks.map((ele)=>(
            <h3>{ele.title}</h3>
        ))
    }
    </div>
    <div className={Styles.rightNav}>
    <img className={Styles.cartimg} src="https://yourimageshare.com/ib/MAwCjUiD5H.webp" alt="cart-icon" />
    <button className={Styles.button}>Login</button>
    <button className={Styles.register}>Register</button>
    </div>
    </div>
    </>
  )
}

export default Navbar
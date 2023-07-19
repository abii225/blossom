import React from 'react'
import Styles from "../styles/Navbar.module.css"
import { Link } from 'react-router-dom'

const navlinks=[
    {title:"Home",link:"/"},
    {title:"Learn",link:"/learn"},
    {title:"Mentors",link:"/mentors"},
    {title:"Shop",link:"/shop"},
    {title:"About",link:"/about"}
]
const Navbar = () => {


  return (
    <>
    <div key="nav" id={Styles.navbar}>
    <Link to="/"><div className={Styles.navLeft}> <img src="https://yourimageshare.com/ib/B6v5d0XyPV.webp" alt="icon" /></div></Link>
    <div className={Styles.midNav}>
    {
        navlinks.map((ele)=>(
          
          <h3 className={Styles.linkfocus}><Link key={ele.id} to={ele.link}>{ele.title}</Link></h3>
        ))
    }
    </div>
    <div className={Styles.rightNav}>
    <Link to="/cart"><img className={Styles.cartimg} src="https://yourimageshare.com/ib/MAwCjUiD5H.webp" alt="cart-icon" /></Link>
    <Link to="/login"><button className={Styles.button}>Login</button></Link>
    <Link to="/signup"><button className={Styles.register}>Register</button></Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
import React, { useContext } from 'react'
import Styles from "../styles/Navbar.module.css"
import { Link } from 'react-router-dom'
import { Authcontext } from '../ContextProvider/AuthProvider'

const navlinks=[
    {title:"Home",link:"/"},
    {title:"Learn",link:"/learn"},
    {title:"Mentors",link:"/mentors"},
    {title:"Shop",link:"/shop"},
    {title:"About",link:"/about"}
]
const Navbar = () => {

  const {allData,login}=useContext(Authcontext);
  console.log(allData,"datas");
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
    <h3><Link to="/cart"><img className={Styles.cartimg} src="https://yourimageshare.com/ib/MAwCjUiD5H.webp" alt="cart-icon" /><span id={Styles.total}>
      {/* { allData.data.length>0?allData.data.length:console.log("")} */}
        </span></Link></h3>
   {
    !login&&<Link to="/login"><button className={Styles.button}>Login</button></Link>
   } 
   {
   !login&&<Link to="/signup"><button className={Styles.register}>Register</button></Link>
   } 
   {
    login&&<h1>user</h1>
   }
    </div>
    </div>
    </>
  )
}

export default Navbar
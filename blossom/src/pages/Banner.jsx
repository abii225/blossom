import React, { useContext } from 'react'
import Styles from "../styles/Banner.module.css"
import { Link } from 'react-router-dom'
import { Authcontext } from '../ContextProvider/AuthProvider'

const Banner = () => {
  const {login}=useContext(Authcontext);
  return (
    <div id={Styles.banner}>
        <div className={Styles.leftBanner}>
           <h3>Learn now</h3>
           <h1>Learn <span style={{color:"red"}}>language</span> and
            improve skills!
           </h1>
           <p className={Styles.para}>Welcome to Blossom, a vibrant language learning platform designed to ignite your linguistic journey.
             Immerse yourself in a world of words and cultural exchange as you embark on an enriching adventure of
              communication and understanding. Our user-friendly interface and interactive lessons cater to learners
               of all levels, guiding you through grammar, vocabulary, and real-life scenarios. Connect with passionate
                language enthusiasts from around the globe, engage in dynamic discussions, and hone your skills through 
                engaging exercises and multimedia resources. Blossom is your gateway to fluency, where you'll blossom into
                 a confident communicator and embrace the beauty of diverse languages. Start your language learning odyssey with us today!</p>
          {
            !login&&<Link to="/signup"><button className={Styles.bannersignupbutton}><span>Sign Up</span></button></Link>
          } 
        </div>
        <div className={Styles.rightBanner}>
          <img key="image" src="https://yourimageshare.com/ib/86uP8uuTli.webp" alt="banner" />
        </div>

    </div>
  )
}

export default Banner
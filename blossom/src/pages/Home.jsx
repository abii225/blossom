import React from 'react'
import Navbar from '../Navbar/Navbar'
import Allroutes from '../AllRoutes/Allroutes'
import "../styles/Home.css"
import Footer from './Footer'
// import Footer from "../pages/Footer"

const Home = () => {

  return (
    <div id="Home">
        <Navbar/>
        <Allroutes/>
    </div>
  )
}

export default Home
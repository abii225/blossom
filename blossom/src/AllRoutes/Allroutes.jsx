import React from 'react'
import {Routes,Route} from "react-router-dom";
import Banner from '../pages/Banner';
import Signup from '../signup/Signup';
import Login from '../signup/Login';
import Learn from "../pages/Learn";
import Mentors from "../pages/Mentors"
import Shop from "../pages/Shop";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Main from "../pages/Main";
const Allroutes = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}></Route>
    {/* //pages */}
        <Route path="/learn" element={<Learn/>}></Route>
        <Route path="/mentors" element={<Mentors/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
    </>
  )
}

export default Allroutes
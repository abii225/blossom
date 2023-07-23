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
import SingleProduct from '../pages/SingleProduct';
import Checkout from "../pages/Checkout";
import Course from '../pages/Course';
import PrivateRoutes from './PrivateRoutes';

const Allroutes = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/shop/singleproduct/:id" element={<SingleProduct/>}></Route>
        <Route path="/shop/singleproduct/checkout/:id" element={<Checkout/>}></Route>
        <Route path="/course/:name" element={<PrivateRoutes><Course/></PrivateRoutes>}></Route>
    {/* //pages */}
        <Route path="/learn" element={<PrivateRoutes><Learn/></PrivateRoutes>}></Route>
        <Route path="/mentors" element={<Mentors/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<PrivateRoutes><Cart/></PrivateRoutes>}></Route>
      </Routes>
      
    </div>
    </>
  )
}

export default Allroutes
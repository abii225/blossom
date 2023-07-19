import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import SectionA from './SectionA'
import SectionB from './SectionB'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SectionA/>
        <SectionB/>
    </div>
  )
}

export default Home
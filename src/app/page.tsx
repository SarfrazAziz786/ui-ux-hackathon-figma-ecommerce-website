import HeroSection from "./components/heroSection";
import BrowseTheRange from "./components/browseTheRange";
import React from 'react'
import OurProducts from "./components/our-products/ourProducts";
import RoomsInspiration from "./components/Roomsinspiration/roomsInspiration";
import FuniroFurniture from "./components/FuniroFurniture/funiroFurniture";


const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <br />
      <BrowseTheRange/>
            <br />
      <OurProducts/>
      <RoomsInspiration/>
      
      <FuniroFurniture/>

    </div>
  )
}

export default Homepage

import React from 'react'
import Navbar from '../Components/layout/Navbar.jsx'
import left_img from '../assets/left_img.png'
import right_bottom_img from '../assets/right_bottom_img.png'
import top_right_img from '../assets/top_right_img.png'
import properties_icon from '../assets/properties_icon.svg'
import properties_icon from '../assets/tenants_icon.svg'
import properties_icon from '../assets/rating_icon.svg'
import properties_icon from '../assets/location_icon.svg'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
       <div className="intro mt-40 flex">
       <div className="left w-[38%] ml-[15%]">
        <div className="introText">
            <p className="text-[#5e35b6] mb-6">Rental Management Simplified</p>
            <h1 className="heading text-6xl font-bold">Find Your Perfect Stay, Manage Your Properties</h1>
            <p className="descriptions text-[#6B7290] mt-6 text-xl">Discover beautiful homes, apartments, and unique spaces. For tenants and landlords who value simplicity and elegance.</p>
        </div>
        <div className="buttons mt-6 flex gap-5">
          <button className="browseProp bg-[#5e35b1] px-7 py-3.5 rounded-2xl text-white font-semibold hover:bg-[#502c99] transition-all duration-300 ease cursor-pointer">Browse Properties</button>
          <button className="listProp text-[#9735b1] px-7 py-3.5 rounded-2xl font-semibold border-2 border-[#ddd6fe] hover:bg-[#ebebeb] transition-all duration-300 ease cursor-pointer ">List Your Property</button>
        </div>
        <div className="acheivements flex mt-10 justify-between mr-24">
          <div className="properties">
            <div className="upper flex gap-1">
            <img src={properties_icon} alt="" className="icon text-[#5E35B1] w-4" />
            <p className="acheiveNumber text-xl font-bold">2400+</p>
            </div>
            <p className="acheiveName text-[12px]">Properties</p>
          </div>

          <div className="Tenants">
            <div className="upper flex gap-1">
            <img src={properties_icon} alt="" className="icon text-[#5E35B1] w-4" />
            <p className="acheiveNumber text-xl font-bold">15,000+</p>
            </div>
            <p className="acheiveName text-[12px]">Happy Tenants</p>
          </div>

          <div className="Rating">
            <div className="upper flex gap-1">
            <img src={properties_icon} alt="" className="icon text-[#5E35B1] w-4" />
            <p className="acheiveNumber text-xl font-bold">4.8</p>
            </div>
            <p className="acheiveName text-[12px]">Rating</p>
          </div>

          <div className="Cities">
            <div className="upper flex gap-1">
            <img src={properties_icon} alt="" className="icon text-[#5E35B1] w-4" />
            <p className="acheiveNumber text-xl font-bold">50+</p>
            </div>
            <p className="acheiveName text-[12px]">Cities</p>
          </div>
        </div>
       </div>

       <div className="right w-[30%] mr-[15%] flex ml-13 gap-7">
        <img className="left_img w-60 h-64 rounded-2xl m-auto -rotate-8" src={left_img} alt="" />
        <div className="right_images">
        <img className="top_right_img w-3xs h-72 rounded-2xl relative rotate-8 -z-1" src={top_right_img} alt="" />
        <img className="right_bottom_img w-60 h-64 rounded-2xl absolute top-101" src={right_bottom_img} alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Homepage

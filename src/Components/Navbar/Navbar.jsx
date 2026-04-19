import React, { useState } from "react"
import { BiLogoMediumOld } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai"
import { PiDotsNineBold } from "react-icons/pi"
import "./Navbar.css"

const Navbar = () => {
  const [navBar, SetNavBar] = useState("menu")

  const showNavBar = () => {
    SetNavBar("menu showNavbar")
  }

  const removeNavBar = () => {
    SetNavBar("menu")
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>angoGo Trip</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>

        {/* Icon to close Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <div className="action-btn">
        <button className="signUpBtn btn">Sign Up</button>

        {/* Icon to toggle Navbar */}
        <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
      </div>
    </div>
  )
}

export default Navbar

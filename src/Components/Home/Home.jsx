import React from "react"
import { AiOutlineSwapRight } from "react-icons/ai"

import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video
          src={"https://www.pexels.com/download/video/19201593/"}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dream With Us!</h1>
        <p data-aos="fade-up">
          Disocover the world's most adventures nature , life os so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          GET STARED
          <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img
              src={
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Destination Image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Destination Image"
            />
            <img
              src={
                "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Destination Image"
            />
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Destination Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from "react"
import "./Subscribe.css"

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1661764534883-ce8b5d996ced?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Customer-care"
          data-aos="fade-down"
        />
        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-up">
            We offer personalized itineraries tailored to individual prefrences
            and intrests.
          </p>
          <button className="btn" data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

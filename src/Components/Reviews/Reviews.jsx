import React from "react"
import { AiFillStar } from "react-icons/ai"

import "./Reviews.css"

const users = [
  "https://randomuser.me/api/portraits/women/90.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/26.jpg",
  "https://randomuser.me/api/portraits/men/62.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
]

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Hear from our delighted travelers about their unforgettable
            journeys!
          </h3>
          <p data-aos="fade-up">
            By choosing us, you are joining travelers who trust us to create
            unforgettable journeys. Read their reviews and see why we are the
            preferred choice for exceptional travel experiences.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            {users.map((src, i) => (
              <img key={i} src={src} alt="Client Image" />
            ))}
          </div>
        </div>
        <div className="imgDiv">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661391719943-9e06229133f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Div Image"
            data-aos="fade-down"
          />
        </div>
      </div>
    </div>
  )
}

export default Reviews

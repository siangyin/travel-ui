import React from "react"
import { MdLocationPin } from "react-icons/md"
import { BsFillCreditCardFill } from "react-icons/bs"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { TiLocation } from "react-icons/ti"

import "./Destinations.css"

import { destinations } from "../../data/destination"

const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destinations</h3>
          <p data-aos="fade-up">
            Fill in the field below the best spot for your next tour.
          </p>
        </div>

        <div className="searchField  grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField  flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField  flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="" />
                  <div className="desInfo flex">
                    <div className="text">
                      <span className="name">{destination.location}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.name}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations

import React from "react"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose Us</h3>
            <p data-aos="fade-up">
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img
                  src={
                    "https://img.freepik.com/premium-vector/safety-icon-vector-image-can-be-used-emergency-service_120816-81638.jpg"
                  }
                  alt="Health and Safety"
                />
              </div>

              <div className="infor">
                <h4 data-aos="fade-up">safety and support</h4>
                <p data-aos="fade-up">
                  The safety and well-being of our clients are our highest
                  priorities. We uphold exceptional safety standards and ensure
                  round-the-clock emergency support to guarantee a secure and
                  worry-free experience throughout your journey.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/854/854996.png"}
                  alt="Destination"
                />
              </div>

              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  we take pride in offering a wide variety of destinations to
                  suit every traveler's preferences. Whether you seek tranquil
                  retreats, cultural exploration, or thrilling adventures, our
                  platform ensures you find the perfect getaway tailored to your
                  desires.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/3930/3930266.png"
                  }
                  alt="Support"
                />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  We’re here for you, anytime you need us. Our 24/7 customer
                  support ensures that help is always available, making your
                  travel planning and experiences seamless and worry-free. Your
                  journey is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-down">
          <img
            src={
              "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="grid image"
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./testimonials.css";
import image1 from "../../../../assests/home4/images/h4-banner6.png";
import { BsFillChatQuoteFill } from "react-icons/bs";
const Testimonials = ({ testimonials, image }) => {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonials">
      <div className="testimonials__body">
        <div className="testimonials__quote">
          <BsFillChatQuoteFill />
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {testimonials.map((testimonial, index) => {
            return (
              <Carousel.Item key={index}>
                <Carousel.Caption>
                  <h3>{testimonial.body}</h3>
                  <p>{testimonial.name}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="testimonials__image">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

Testimonials.defaultProps = {
  testimonials: [
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Hannah Vaughn",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Hannah Vaughn",
    },
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Hannah Vaughn",
    },
  ],
};

export default Testimonials;

import React from "react";
import image1 from "../../../../assests/home/images/h1-slider1.png";
import image2 from "../../../../assests/home/images/h1-slider2.jpg";
import image3 from "../../../../assests/home/images/h1-slider3.png";
import Carousel from "react-bootstrap/Carousel";
import ShopButton from "../shopButton/ShopButton";
import "./productSlider.css";
const ProductSlider = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item1">
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h2>x New Arrivals x</h2>
          <h1>Send your love</h1>
          <h3>
            From <span>₹299.99</span>
          </h3>
          <ShopButton />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item2">
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h2>x Stationary x</h2>
          <h1>Unique Gifts</h1>
          <h3>For every occasion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item3">
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h2>x Stationary x</h2>
          <h1>Sales 50% Off</h1>
          <h3>Office & Stationary</h3>
          <h3>
            From <span>₹299.99</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // <div className="productSlider">
    //   <div className="productSlider__image">
    //     <img src={image1} alt="a box of gift" />
    //   </div>
    //   <div className="productSlider__context">
    //     <div className="productSlider__primaryText">
    //       <h2>x New Arrivals x</h2>
    //     </div>
    //     <div className="productSlider__primaryHeading">
    //       <h1>Send Your Love</h1>
    //     </div>
    //     <div className="productSlider__primaryText">
    //       <h3>
    //         FROM <snap className="productSlider__price">₹250</snap>
    //       </h3>
    //     </div>
    //     <div className="productSlider__ctn">
    //       <a href="#">Send Gift</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductSlider;

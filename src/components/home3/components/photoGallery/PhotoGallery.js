import React from "react";
import "./photoGallery.css";
import image1 from "../../../../assests/home3/img/h3-banner4.jpg";
import image2 from "../../../../assests/home3/img/h3-banner5.jpg";
import image3 from "../../../../assests/home3/img/h3-banner6.jpg";
import image4 from "../../../../assests/home3/img/h3-banner7.jpg";
import image5 from "../../../../assests/home3/img/h3-banner8.jpg";
import image6 from "../../../../assests/home3/img/h3-banner9.jpg";
import image7 from "../../../../assests/home3/img/h3-banner10.jpg";
const PhotoGallery = () => {
  return (
    <div className="photoGallery">
      <div className="photoGallery__item">
        <div className="photoGallery__itemWrapper">
          <img src={image1} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Aninversary Gifts
          </a>
        </div>
        <div className="photoGallery__itemWrapper">
          <img src={image2} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Gifts by Interest
          </a>
        </div>
      </div>
      <div className="photoGallery__item">
        <div className="photoGallery__itemWrapper">
          <img src={image3} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Gifts by Occasion
          </a>
        </div>
        <div className="photoGallery__itemWrapper">
          <img src={image4} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Personalized Gifts
          </a>
        </div>
      </div>
      <div className="photoGallery__item">
        <div className="photoGallery__itemWrapper">
          <img src={image5} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Upcoming Holidays
          </a>
        </div>
        <div className="photoGallery__itemWrapper">
          <img src={image6} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Gifts by Recipient
          </a>
        </div>
        <div className="photoGallery__itemWrapper">
          <img src={image7} alt="" />
          <a href="#" className="photoGallery__itemWrapperCaption">
            Party, Cards & Wrap
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

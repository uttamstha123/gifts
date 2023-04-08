import React from "react";
import ShopLink from "../../shopLink/ShopLink";
import "./holidayIdea.css";
import bannerImage from "../../../../../assests/home/images/h1-banner5.jpg";
const HolidayIdea = () => {
  return (
    <div className="holidayIdea">
      <div className="holidayIdea__header">
        <h1>Top Holiday</h1>
        <span>Gift Ideas</span>
      </div>
      <div className="holidayIdea__bannerImage">
        <img src={bannerImage} alt="gift ideas" />
      </div>
      <ShopLink />
    </div>
  );
};

export default HolidayIdea;

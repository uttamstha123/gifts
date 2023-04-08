import React from "react";
import banner from "../../../../../assests/home/images/h1-banner2.jpg";
import "./holidayOffer.css";
const HolidayOffer = () => {
  return (
    <div className="holidayOffer">
      <div className="holidayOffer__image">
        <img src={banner} alt="jewelry" />
      </div>
      <div className="holidayOffer__context">
        <div className="globalPrimaryText">
          <h1>Holiday Offer</h1>
        </div>
        <div className="globalSecondaryHeading">
          <h1>Sale 50% Off</h1>
        </div>
        <div className="holidayOffer__coupenCode">
          <p>CODE: GRS18</p>
        </div>
      </div>
    </div>
  );
};
export default HolidayOffer;

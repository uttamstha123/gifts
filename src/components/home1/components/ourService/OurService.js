import React from "react";
import DottedBorder from "../dottedBorder/DottedBorder";
import "./ourService.css";
const OurService = ({ flexDirection, borderDirection, borderWidth }) => {
  return (
    <div className="ourService" style={{ flexDirection: `${flexDirection}` }}>
      <div className="ourService__item">
        <div className="ourService__itemLogo">
          <span>
            <i class="fa-solid fa-gift"></i>
          </span>
        </div>
        <div className="ourService__context">
          <div className="ourService__contextHeading">
            <h1>Delivering quality gifts</h1>
          </div>
          <div className="ourService__contextSubHeading">
            <h2>information on its origins</h2>
          </div>
        </div>
      </div>
      <DottedBorder direction={borderDirection} width={borderWidth} />
      <div className="ourService__item">
        <div className="ourService__itemLogo">
          <span>
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
        </div>
        <div className="ourService__context">
          <div className="ourService__contextHeading">
            <h1>Gifts for all occasions</h1>
          </div>
          <div className="ourService__contextSubHeading">
            <h2>Variants and technical</h2>
          </div>
        </div>
      </div>
      <DottedBorder direction={borderDirection} width={borderWidth} />
      <div className="ourService__item">
        <div className="ourService__itemLogo">
          <span>
            <i class="fa-brands fa-gratipay"></i>
          </span>
        </div>
        <div className="ourService__context">
          <div className="ourService__contextHeading">
            <h1>Great customer service</h1>
          </div>
          <div className="ourService__contextSubHeading">
            <h2>random Lipsum generator</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurService;

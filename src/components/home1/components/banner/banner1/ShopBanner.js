import React from "react";
import ShopButton from "../../shopButton/ShopButton";
import ShopLink from "../../shopLink/ShopLink";
import "./shopBanner.css";
const ShopBanner = ({
  heading,
  subHeading,
  bannerImage,
  link,
  btn,
  btnName,
  price
}) => {
  return (
    <div className="shopBanner">
      {/* <img src={banner2} alt="jwelery" className="shopBanner__image" /> */}
      <div className="shopBanner__image">
        <img src={bannerImage} alt="jewelry" />
      </div>
      <div className="shopBanner__context">
        <div className="globalPrimaryText">
          <h1>{subHeading}</h1>
        </div>
        <div className="globalPrimaryHeading">
          <h1>{heading}</h1>
        </div>
        <div class="globalSecondaryText">
          <h1>{price}</h1>
        </div>
        {link ? <ShopLink /> : ""}
        {btn ? <ShopButton name={btnName} /> : ""}
      </div>
    </div>
  );
};
ShopBanner.defaultProps = {
  link: false,
};
export default ShopBanner;

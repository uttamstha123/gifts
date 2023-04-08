import React from "react";
import './shopLink.css'

const ShopLink = ({ title }) => {
  return (
    <a href="#" className="shopLink">
      {title}
    </a>
  );
};

ShopLink.defaultProps = {
  title: "Shop Now",
};

export default ShopLink;

import React from "react";
import './shopButton.css'
const ShopButton = ({ name, href }) => {
  return (
    <div class="shopButton">
      <a href={href}>{name}</a>
    </div>
  );
};
ShopButton.defaultProps = {
  name: "Shop Now",
  href: "#",
};
export default ShopButton;

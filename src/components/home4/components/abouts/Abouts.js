import React from "react";
import CursiveTitle from "../../../home1/components/cursiveTitle/CursiveTitle";
import aboutsImage from "../../../../assests/home4/images/h4-banner5.png";
import ShopLink from "../../../home1/components/shopLink/ShopLink";
import './abouts.css';
const Abouts = ({ image }) => {
  return (
    <div className="abouts">
      <div className="abouts__heading">
        <CursiveTitle title={"We deliver hapiness"} />
      </div>
      <div className="abouts__main">
        <div className="abouts__mainImage">
          <img src={image ? image : aboutsImage} alt="" />
        </div>
        <div className="abouts__mainBody">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <h2>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </h2>
          <ShopLink title={'Contact Us'}/>
        </div>
      </div>
    </div>
  );
};

export default Abouts;

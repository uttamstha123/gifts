import React from "react";
import CursiveTitle from "../../../home1/components/cursiveTitle/CursiveTitle";
import photo from "../../../../assests/home/images/cat02.jpg";
import "./photos.css";
const Photos = () => {
  return (
    <div className="photos">
      <div className="photos__header">
        <CursiveTitle width={"100%"} title={"Photos"} />
      </div>
      <div className="photos__container">
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
        <div className="photos__containerItem">
          <img src={photo} alt="gifts" />
        </div>
      </div>
    </div>
  );
};

export default Photos;

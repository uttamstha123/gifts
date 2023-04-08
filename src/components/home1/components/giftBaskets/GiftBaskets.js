import React from "react";
import CursiveTitle from "../cursiveTitle/CursiveTitle";
import "./giftbaskets.css";
import giftImage from "../../../../assests/home/images/cat01.jpg";
// import boxImage2 from "../../../../assests/home/images/cat02.jpg";
// import boxImage3 from "../../../../assests/home/images/cat03.jpg";
// import boxImage4 from "../../../../assests/home/images/cat04.jpg";
const GiftBaskets = ({ gifts, cursiveTitle, justifyContent, isHover }) => {
  return (
    <div className="giftbaskets">
      <div className="giftbaskets__header">
        <CursiveTitle title={cursiveTitle} />
      </div>
      <div className="giftbaskets__container">
        {gifts.map((gift) => (
          <div
            className={`giftbaskets__box ${
              isHover ? "giftbaskets__boxHover" : ""
            }`}
            style={{
              justifyContent: `${justifyContent}`,
            }}
          >
            {gift.image ? (
              <div className="giftbaskets__boxImage">
                <img src={gift.image} alt="gifts" />
              </div>
            ) : (
              ""
            )}
            <div className="giftbaskets__boxContext">
              <h1> {gift.for}</h1>
              <p>{gift.items} items</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="giftbaskets__box2">
          <div className="giftbaskets__boxWrapper">
            <div className="giftbaskets__boxWrapperImage">
              <img src={boxImage2} alt="gifts" />
            </div>
            <div className="giftbaskets__boxWrapperContext">
              <h1>For Ocassions</h1>
              <p>{(items = "7")} items</p>
            </div>
          </div>
        </div>
        <div className="giftbaskets__box3">
          <div className="giftbaskets__boxWrapper">
            <div className="giftbaskets__boxWrapperImage">
              <img src={boxImage3} alt="gifts" />
            </div>
            <div className="giftbaskets__boxWrapperContext">
              <h1>For Ocassions</h1>
              <p>{(items = "3")} items</p>
            </div>
          </div>
        </div>
        <div className="giftbaskets__box4">
          <div className="giftbaskets__boxWrapper">
            <div className="giftbaskets__boxWrapperImage">
              <img src={boxImage4} alt="gifts" />
            </div>
            <div className="giftbaskets__boxWrapperContext">
              <h1>For Her</h1>
              <p>{(items = "8")} items</p>
            </div>
          </div>
        </div> */}
    </div>
  );
};

GiftBaskets.defaultProps = {
  gifts: [
    {
      image: `${giftImage}`,
      for: "For him",
      items: 6,
    },
    {
      image: `${giftImage}`,
      for: "For occasions",
      items: 3,
    },
    {
      image: `${giftImage}`,
      for: "For her",
      items: 8,
    },
    {
      image: `${giftImage}`,
      for: "For occasions",
      items: 7,
    },
  ],
  isHover: true,
  cursiveTitle: "Gift kits & Baskets",
  justifyContent: "center",
};
export default GiftBaskets;

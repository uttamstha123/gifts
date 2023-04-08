import React from "react";
import GiftBaskets from "../home1/components/giftBaskets/GiftBaskets";
import Header from "../home1/components/headers/Header1";
import ProductSlider from "../home1/components/productSlider/ProductSlider";
import giftImage1 from "../../assests/home4/images/h4-banner1.jpg";
import giftImage2 from "../../assests/home4/images/h4-banner2.jpg";
import giftImage3 from "../../assests/home4/images/h4-banner3.jpg";
import giftImage4 from "../../assests/home4/images/h4-banner4.jpg";
import "./home4.css";
import ProductItem from "../home1/components/productItem/ProductItem";
import { productList } from "../home1/components/productItem/productList";
import OurService from "../home1/components/ourService/OurService";
import Testimonials from "../home1/components/testimonials/Testimonials";
import HolidayOffer from "../home1/components/banner/banner2/HolidayOffer";
import Abouts from "./components/abouts/Abouts";

const Home4 = () => {
  const gifts = [
    {
      image: `${giftImage1}`,
      for: "Birthday Gifts",
      items: 6,
    },
    {
      image: `${giftImage2}`,
      for: "Holiday Gifts",
      items: 3,
    },
    {
      image: `${giftImage3}`,
      for: "Aniversary Gifts",
      items: 8,
    },
    {
      image: `${giftImage4}`,
      for: "Personalized Gifts",
      items: 7,
    },
  ];
  return (
    <div className="home4">
      <div className="home4__header">
        <Header />
      </div>
      <div className="globalPaddingContainer">
        <div className="home4__productSlider">
          <ProductSlider />
        </div>
        <div className="home4__giftbaskets">
          <GiftBaskets gifts={gifts} isHover={false} />
        </div>
        <div className="home4__productItem">
          <ProductItem title={"Our products"} productList={productList} />
        </div>
        <div className="home4__container">
          <div className="home4__containerLeft">
            <div className="home4__containerLeftAboutUs">
              <Abouts />
            </div>
            <div className="home4__containerLeftTestimonials">
              <Testimonials />
            </div>
          </div>
          <div className="home4__containerRight">
            <div className="home4__containerRightOurService">
              <OurService borderWidth={'max-width'} borderDirection={'bottom'} />
            </div>
            <div className="home4__containerRightHolidayOffer">
              <HolidayOffer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;

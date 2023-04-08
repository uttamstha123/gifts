import React from "react";
import Header from "./components/headers/Header1";
import Category from "./components/category/Category";
import OurService from "./components/ourService/OurService";
import HolidayIdea from "./components/banner/banner3/HolidayIdea";
import HolidayOffer from "./components/banner/banner2/HolidayOffer";
import Articles from "./components/articles/Articles";
import ProductSlider from "./components/productSlider/ProductSlider";
import ShopBanner from "./components/banner/banner1/ShopBanner";
import ProductItem from "./components/productItem/ProductItem";

import bannerWomenSale from "../../assests/home/images/h1-banner1.jpg";
import bannerAmazingGifts from "../../assests/home/images/h1-banner4.jpg";
import bannerShopOnline from "../../assests/home/images/h1-banner3.jpg";
import "./home1.css";
import GiftBaskets from "./components/giftBaskets/GiftBaskets";
import Testimonials from "./components/testimonials/Testimonials";
import { productList } from "./components/productItem/productList";

const Home1 = () => {
  return (
    <>
      <Header />
      <main className="home__mainSection">
        <div className="home__leftSection">
          <div className="home__leftSectionItem">
            <Category />
          </div>
          <div className="home__leftSectionItem">
            <OurService flexDirection="column" borderDirection={"bottom"} />
          </div>
          <div className="home__leftSectionItem">
            <HolidayIdea />
          </div>
          <div className="home__leftSectionItem">
            <Articles />
          </div>
          <div className="home__leftSectionItem">
            {/* <Testimonials /> */}
          </div>
        </div>
        <div className="home__rightSection">
          <div className="home__heroSection">
            <div className="home__heroSectionItem home__heroSectionItem1">
              <ProductSlider />
            </div>
            <div className="home__heroSectionFlexItem">
              <div className="home__heroSectionItem home__heroSectionItem2">
                <ShopBanner
                  heading={"Women's Day"}
                  subHeading={"Clearence Sale"}
                  bannerImage={bannerWomenSale}
                />
              </div>
              <div className="home__heroSectionItem home__heroSectionItem3">
                <HolidayOffer />
              </div>
            </div>
          </div>
          <div className="home__featureSection">
            <ProductItem productList={productList} defaultFilter={"feature"} />
          </div>
          <div className="home__heroSectionFlexItem">
            <div className="home__heroSectionItem home__heroSectionItem5">
              <ShopBanner
                heading={"₹999.99"}
                subHeading={"Shop Online Gifts Under"}
                bannerImage={bannerShopOnline}
              />
            </div>
            <div className="home__heroSectionItem home__heroSectionItem4">
              <ShopBanner
                heading={"30% off home decor"}
                subHeading={"Amazing Gifts"}
                bannerImage={bannerAmazingGifts}
              />
            </div>
          </div>
          <div className="home__giftsSection">
            <GiftBaskets />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home1;

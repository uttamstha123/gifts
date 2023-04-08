import React from "react";
import ShopBanner from "../home1/components/banner/banner1/ShopBanner";
import GiftBaskets from "../home1/components/giftBaskets/GiftBaskets";
import Header from "../home1/components/headers/Header1";
import OurService from "../home1/components/ourService/OurService";
import ProductSlider from "../home1/components/productSlider/ProductSlider";
import FeatureItem from "../home1/components/productItem/ProductItem";
import image1 from "../../assests/home/images/h1-banner2.jpg";
import Articles from "../../components/home1/components/articles/Articles";
import "./home2.css";
import DottedBorder from "../home1/components/dottedBorder/DottedBorder";
import Photos from "./components/photos/Photos";
import { productList } from "../home1/components/productItem/productList";
const Home2 = () => {
  return (
    <div className="home2">
      <div className="home2__header">
        <Header />
      </div>
      <div className="home2__productSlider">
        <ProductSlider />
      </div>
      <div className="home2__ourService">
        <OurService
          // flexDirection="column"
          borderDirection="right"
          borderWidth="max-content"
        />
      </div>
      <DottedBorder direction="bottom" width="100%" />
      <div class="home2__giftsbaskets">
        <GiftBaskets justifyContent="space-around" />
      </div>
      <div className="home2__banner">
        <ShopBanner
          subHeading="Valentine's Day"
          heading="Love Goes on"
          bannerImage={image1}
        />
        <ShopBanner
          heading="All Occasions"
          subHeading="New Collection"
          bannerImage={image1}
          link={true}
        />
        <ShopBanner
          heading="All Occasions"
          subHeading="New Collection"
          bannerImage={image1}
          btn={true}
          btnName="View Detail"
        />
      </div>
      <div className="home2__featureItems">
        <FeatureItem productList={productList} defaultFilter={"feature"} />
      </div>
      <div className="home2__bottomSection">
        <div className="home2__bottomSectionItem">
          <Articles />
        </div>
        <div className="home2__bottomSectionItem">
          <Photos />
        </div>
        <div className="home2__bottomSectionItem">
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default Home2;

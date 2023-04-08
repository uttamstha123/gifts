import React from "react";
import "./home5.css";
import Header from "../home1/components/headers/Header1";
import ShopBanner from "../home1/components/banner/banner1/ShopBanner";
import image1 from "../../assests/home/images/h1-banner1.jpg";
import image2 from "../../assests/home/images/h1-banner2.jpg";
import ProductItem from "../home1/components/productItem/ProductItem";
import OurService from "../home1/components/ourService/OurService";
import { productList } from "../home1/components/productItem/productList";
import DottedBorder from "../home1/components/dottedBorder/DottedBorder";
const Home5 = () => {
  return (
    <div className="home5">
      <div className="home5__header">
        <Header />
      </div>
      <div className="globalPaddingContainerWhite">
        <div className="home5__topSection">
          <div className="home5__topSectionShopBanner">
            <ShopBanner
              heading={"Up To 50% Off"}
              bannerImage={image2}
              subHeading={"Clearence Sale"}
              link={true}
            />
          </div>
          <div className="home5__topSectionShopBanner">
            <ShopBanner
              heading={"Handmade Special Gifts"}
              subHeading={"x New Arrivals x"}
              bannerImage={image1}
              btn={true}
              btnName="Send Gift"
              price="FROM ₹299.99"
            />
          </div>
          <div className="home5__topSectionShopBanner">
            <ShopBanner
              heading={"Customize Gifts"}
              bannerImage={image2}
              subHeading={"Best Offer"}
              link={true}
            />
          </div>
        </div>
        <div className="home5__productItem">
          <ProductItem productList={productList} defaultFilter={"feature"} />
        </div>
        <div className="home5__bottomSection">
          <div className="home5__bottomSectionShopBanner">
            <ShopBanner
              heading={"Up To 50% Off"}
              bannerImage={image2}
              subHeading={"Clearence Sale"}
              link={true}
            />
          </div>
          <div className="home5__bottomSectionShopBanner">
            <ShopBanner
              heading={"Handmade Special Gifts"}
              subHeading={"x New Arrivals x"}
              bannerImage={image1}
            />
          </div>
          <div className="home5__bottomSectionShopBanner">
            <ShopBanner
              heading={"Customize Gifts"}
              bannerImage={image2}
              subHeading={"Best Offer"}
              link={true}
            />
          </div>
        </div>
        <div className="home5__productItem">
          <ProductItem productList={productList} />
        </div>
        <DottedBorder width="100%" direction="bottom" />
        <div className="home5__ourService">
          <OurService borderWidth={"max-content"} borderDirection={"right"} />
        </div>
        <DottedBorder width="100%" direction="bottom" />
      </div>
    </div>
  );
};

export default Home5;

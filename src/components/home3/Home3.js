import React from "react";
import "./home3.css";
import ShopBanner from "../home1/components/banner/banner1/ShopBanner";
import HolidayOffer from "../home1/components/banner/banner2/HolidayOffer";
import Header from "../home1/components/headers/Header1";
import ProductSlider from "../home1/components/productSlider/ProductSlider";
import bannerImage1 from "../../assests/home/images/h1-banner2.jpg";
import bannerImage2 from "../../assests/home/images/h1-banner1.jpg";
import OurService from "../home1/components/ourService/OurService";
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import Category from "../home1/components/category/Category";
import ProductItem from "../home1/components/productItem/ProductItem";
import FlashSaleCard from "../home1/components/productItem/flashSaleCard/FlashSaleCard";
import Articles from "../home1/components/articles/Articles";
import articleImage1 from "../../assests/home3/img/blog-1-410x250.jpg";
import articleImage2 from "../../assests/home3/img/blog-2-410x250.jpg";
import articleImage3 from "../../assests/home3/img/blog-3-410x250.jpg";
import GiftBaskets from "../home1/components/giftBaskets/GiftBaskets";
import { productList } from "../home1/components/productItem/productList";
const Home3 = () => {
  // passing props to article
  const articles = [
    {
      article: "Promotional Advertising Specialty You Ve Waited Long Enough",
      by: "admin",
      date: "May 7,2021",
      image: `${articleImage1}`,
    },
    {
      article: "What Is The Big R For Marketing Your Business",
      by: "admin",
      date: "May 7,2021",
      image: `${articleImage2}`,
    },
    {
      article: "Welcome to Deviclassifieds Free Classifieds Free Ads Free-ads",
      by: "admin",
      date: "May 7,2021",
      image: `${articleImage3}`,
    },
  ];
  return (
    <div className="home3">
      <div className="home3__header">
        <Header />
      </div>
      <div class="globalPaddingContainer">
        <div className="home3__gridContainer">
          <div className="home3__gridContainerItem home3__gridContainerShopBanner1">
            <ShopBanner
              bannerImage={bannerImage2}
              heading="Top Holiday"
              subHeading="Gift Ideas"
              link={false}
            />
          </div>
          <div className="home3__gridContainerItem home3__gridContainerHolidayOffer">
            <HolidayOffer />
          </div>
          <div className="home3__gridContainerItem home3__gridContainerShopBanner2">
            <ShopBanner
              bannerImage={bannerImage1}
              heading="Gifts for Guy"
              subHeading="Top 10"
              link={true}
            />
          </div>
          <div className="home3__gridContainerItem home3__gridContainerProductSlider">
            <ProductSlider />
          </div>
        </div>
        <div className="home3__ourService">
          <OurService borderDirection="right" borderWidth="max-content" />
        </div>
        <div className="home3__container">
          <div className="home3__containerLeft">
            <div className="home3__containerLeftPhotoGallery">
              <PhotoGallery />
            </div>
            <div className="home3__containerLeftProductItems">
              <ProductItem
                productList={productList}
                defaultFilter={"feature"}
              />
            </div>
            <div className="home3__containerLeftArticles">
              <Articles
                articles={articles}
                title={"Gifts & Baskets"}
                direction="row"
              />
            </div>
          </div>
          <div className="home3__containerRight">
            <div className="home3__containerRightCategory">
              <Category />
            </div>
            <div className="home3__containerRightFlashSale">
              <FlashSaleCard product={productList.feature[0]} />
            </div>
            <div className="home3__containerRightGiftSet">
              <GiftBaskets cursiveTitle={"Gift sets"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;

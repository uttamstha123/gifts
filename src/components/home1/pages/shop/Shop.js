import React from "react";
import Category from "../../components/category/Category";
import Header from "../../components/headers/Header1";
import PriceRange from "../../components/priceRange/PriceRange";
import ProductItem from "../../components/productItem/ProductItem";
import ProductItemCard from "../../components/productItem/productItemCard/ProductItemCard";
import { productList } from "../../components/productItem/productList";
import { useContext } from "react";
import { ProductContext } from "../../../../ProductContext";
import "./shop.css";
import FilterColors from "../../components/filterColors/FilterColors";
import ShopFilter from "../../components/shopFilter/ShopFilter";
const Shop = () => {
  const productList = useContext(ProductContext);
  console.log(productList);
  return (
    <div className="shop">
      <div className="shop__header">
        <Header />
      </div>
      <div className="shop__main globalPaddingContainerWhite">
        <div className="shop__mainLeft">
          <div className="shop__mainLeftCategory">
            <h1 className="shop__mainLeftHeading">Product categories</h1>
            <Category />
          </div>
          <div className="shop__mainLeftPriceRange">
            <h1 className="shop__mainLeftHeading">Filter by Price</h1>
            <PriceRange min={60} max={200} />
          </div>
          <div className="shop__mainLeftColor">
            <h1 className="shop__mainLeftHeading">Filter by Color</h1>
            <FilterColors/>
          </div>
        </div>
        <div className="shop__mainRight">
          <div className="shop_mainRightFilters">
            <ShopFilter/>
          </div>
          <div className="shop__mainRightProductItem">
            <ProductItemCard products={productList["feature"]} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React, { useState } from "react";
import ProductItemCard from "./productItemCard/ProductItemCard";
import CursiveTitle from "../cursiveTitle/CursiveTitle";
import "./productItem.css";
const ProductItem = ({ defaultFilter, productList, title }) => {
  const [filterKey, setFilterKey] = useState("feature");
  function handleFilter(e) {
    e.preventDefault();
    setFilterKey(e.target.innerText);
  }
  //   const basePath = "../../../assests/home/images";
  return (
    <div className="productItem">
      <CursiveTitle title={title} />
      {defaultFilter ? (
        ""
      ) : (
        <div className="productItem__filter">
          {Object.keys(productList).map((key) => (
            <h1
              onClick={(e) => handleFilter(e)}
              className={
                key.toLowerCase() === filterKey.toLowerCase() ? "active" : ""
              }
            >
              {key}
            </h1>
          ))}
        </div>
      )}
      <div className="productItem__container">
        <ProductItemCard
          products={
            defaultFilter
              ? productList[defaultFilter]
              : productList[filterKey.toLowerCase()]
          }
        />
      </div>
    </div>
  );
};

ProductItem.defaultProps = {
  title: "Feature items",
};

export default ProductItem;

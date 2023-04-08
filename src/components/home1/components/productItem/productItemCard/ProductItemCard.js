import React from "react";
import "./productItemCard.css";
import {Link} from 'react-router-dom';
import image1 from "../../../../../assests/home/images/21-330x358.jpg";
import Rating from "../../ratings/Rating";
import {
  BsFillBasketFill,
  BsZoomIn,
  BsHeart,
  BsArrowRepeat,
} from "react-icons/bs";
const ProductItemCard = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="productItemCard">
          <div className="productItemCard__image">
            <img src={image1} alt="product image" />
            <div className="productItemCard__action">
              <div className="productItemCard__actionWrap">
                <a href="#" className="productItemCard__actionIcon">
                  <BsFillBasketFill />
                </a>
                <button href="#" className="productItemCard__actionIcon">
                  <BsZoomIn />
                </button>
                <button href="#" className="productItemCard__actionIcon">
                  <BsHeart />
                </button>
                <button href="#" className="productItemCard__actionIcon">
                  <BsArrowRepeat />
                </button>
              </div>
            </div>
          </div>
          <div className="productItemCard__detail">
            {/* productItemCard__detailPriceTag */}
            <div className="productItemCard__priceTag">
              {product.price && product.previousPrice ? (
                <h1>
                  {product.price}{" "}
                  <span className="productItemCard__previousPrice">
                    {product.previousPrice}
                  </span>
                </h1>
              ) : (
                <h1>{product.price}</h1>
              )}
            </div>
            <Link to="/:id" className="productItemCard__productName">
              {product.productName}
            </Link>
            <Rating
              className="productItemCard__ratings"
              value={product.ratings}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItemCard;

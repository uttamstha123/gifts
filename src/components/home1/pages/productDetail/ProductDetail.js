import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../ProductContext";
import ImageGallery from "react-image-gallery";
import image11 from "../../../../assests/shop/images/7-1-100x100.jpg";
import image22 from "../../../../assests/shop/images/7-2-100x100.jpg";
import image33 from "../../../../assests/shop/images/7-3-100x100.jpg";
import image44 from "../../../../assests/shop/images/7-100x100.jpg";
import image1 from "../../../../assests/shop/images/7-1-600x650.jpg";
import image2 from "../../../../assests/shop/images/7-2-600x650.jpg";
import image3 from "../../../../assests/shop/images/7-3-600x650.jpg";
import image4 from "../../../../assests/shop/images/7-600x650.jpg";
import "./productDetail.css";
import Rating from "../../../home1/components/ratings/Rating";
import Header from "../../../home1/components/headers/Header1";
import "./productDetail.css";
import {
  BsHeart,
  BsArrowRepeat,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import ShopLink from "../../../home1/components/shopLink/ShopLink";
import Quantity from "../../components/quantity/Quantity";
const ProductDetail = () => {
  const products = useContext(ProductContext);
  const [currentImage, setCurrentImage] = useState(image1);
  const handleImage = (e) => {
    let image = e.target.dataset.image;
    let imageElement = e.target.parentElement;
    image = image.substr(0, image.length - 1);

    setCurrentImage(images[image]);
    // Remove the "active" class from all images
    const allImages = document.querySelectorAll("img[data-image]");
    allImages.forEach((img) => {
      img.parentElement.classList.remove("active");
    });

    // Add the "active" class to the clicked image
    imageElement.classList.add("active");
    imageElement.previousSibling.classList.add("previous");
    imageElement.nextSibling.classList.add("next");
  };
  const colors = ["#FED2CC", " #8F9779", " #E9D66B", "#F5F5F5", " #534B4F"];
  const images = {
    image1,
    image2,
    image3,
    image4,
  };
  return (
    <div className="productDetail">
      <Header />
      <div className="productDetail__main">
        <div className="productDetail__mainImage">
          <div className="productDetail__mainImageContainer">
            <img src={currentImage} alt="product" />
          </div>
          <div className="productDetail__mainImageThumbnail">
            <div className="active">
              <img
                onClick={handleImage}
                data-image="image11"
                src={image11}
                alt="product"
              />
            </div>
            <div>
              <img
                data-image="image22"
                onClick={handleImage}
                src={image22}
                alt="product"
              />
            </div>
            <div>
              <img
                onClick={handleImage}
                src={image33}
                data-image="image33"
                alt="product"
              />
            </div>
            <div>
              <img
                onClick={handleImage}
                src={image44}
                data-image="image44"
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="productDetail__mainDescription">
          <div className="productDetail__mainDescriptionHeading">
            <h1>Hallmark Disney Mickey Minnie</h1>
            <h2>
              ₹101<span>₹150</span>
            </h2>
          </div>
          <div className="productDetail__mainDescriptionRating">
            <Rating value={"4.5"} />
          </div>
          <div className="productDetail__mainDescriptionInfo">
            <p>
              An dico accommodare ius, porro mnesarchum pro in. Cetero fierent
              urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu
              has vide putent, dico option nominati no eam. Ea erant impetus
              consequuntur eos, velit congue vidisse eos ne.
            </p>
          </div>
          {colors ? (
            <div className="productDetail__mainDescriptionColors">
              <h3>Color:</h3>
              <div>
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="color"
                    style={{ background: `${color}` }}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="productDetail__mainDescriptionCart">
            <h3>Quantity:</h3>
            <Quantity />
            <ShopLink title="Add To Cart" />
            <BsHeart />
            <BsArrowRepeat />
          </div>
          <div className="productDetail__mainDescriptionShare">
            <h3>Share: </h3>
            <div className="productDetail__mainDescriptionIcons">
              <div>
                <BsFacebook />
              </div>
              <div>
                <BsTwitter />
              </div>
              <div>
                <BsLinkedin />
              </div>
              <div>
                <BsPinterest />
              </div>
              <div>
                <BsFillEnvelopeFill />
              </div>
            </div>
          </div>
          <div className="productDetail__mainDescriptionMore">
            <h3>
              SKU: <span>N/A-363</span>
            </h3>
            <h3>
              Category: <span>Garment Care, Personalised Gifts</span>
            </h3>
            <h3>
              Tags:<span>Classic,Healthy</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

//internal imports
import "./ProductListing.css";

import { SideBar } from "../../components/SideBar/SideBar";
import { image1 } from "../../assets";
export const ProductListing = () => {
  return (
    <>
      <SideBar />
      <div className="all-products-page">
        <div className="product">
          <img className="product-img" src={image1} alt="a new collections" />
          <div className="product-cantent">
            <h2 className="product-name">product name</h2>
        <h2>price: 900</h2>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
            <div className="rating-stuff">
              <p>78% off</p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faStar} />
                  <em>3</em>
                </strong>
              </p>
            </div>
            <div className="cart-wishlist">
              <div className="addtocart-btn">
                <button className="login-btns">
                  <FontAwesomeIcon icon={faCartPlus} /> add to cart
                </button>
              </div>
              <FontAwesomeIcon
                icon={faHeart}
                
                className="wislist-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

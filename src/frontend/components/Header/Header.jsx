import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlenderPhone,
  faMagnifyingGlass,
  faCartArrowDown,
  faAddressCard,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { filterContext } from "../../hooks/context/filterContext";
import { productContext } from "../../hooks/context/productsContext";
import { authContext } from "../../hooks/context/authContext";
import { toast } from "react-toastify";

export const Header = () => {
  const [bars, setBars] = useState(false);
  const { setfilterDispatch, search } = useContext(filterContext);
  const { cart, wishList } = useContext(productContext);
  const { token, setAuthDispatch } = useContext(authContext);
  const navigate=useNavigate()

  const userLogoutHandler = () => {
    setAuthDispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.info("logged out successfully", {
      autoClose: 2000,
      className: "toast-styling",
    });
  };
  return (
    <div>
      <div className="header-container">
        <Link to="/" className="remove-ud">
          <div className="hdr-logo">
            <FontAwesomeIcon icon={faBlenderPhone} />
            <h2 className="logo-name">~Decor Super Market~</h2>
          </div>
        </Link>

        <div className="search-baar">
          <Link to="./product-listing">
            <input
              type="search"
              placeholder="Search..."
              size="30"
              value={search}
              onChange={(event) =>
                setfilterDispatch({
                  type: "SEARCH_PRODUCTS",
                  payload: event.target.value,
                })
              }
            />
          </Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </div>

        <div className="hdr-right-side">
          <Link to="/product-listing" className="remove-ud">
            <h2>Explore</h2>
          </Link>
          <Link to="/wish-list">
            <div>
              <p className="c-w-count">{wishList.length}</p>
              <br />

              <FontAwesomeIcon icon={faHeart} size="2xl" />
            </div>
          </Link>

          <Link to="/cart">
            <div>
              <p className="c-w-count">{cart.length}</p>
              <br />
              <FontAwesomeIcon icon={faCartArrowDown} size="2xl" />
            </div>
          </Link>
          <FontAwesomeIcon icon={faAddressCard} size="2xl" />
          <Link to="/login">
            {token ? (
              <button className="hrd-login-btn" onClick={userLogoutHandler}>
                Log out
              </button>
            ) : (
              <button className="hrd-login-btn">Log in</button>
            )}
          </Link>
        </div>

        <div
          className={bars ? "responsive-bars" : "bars"}
          onClick={() => setBars(!bars)}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>
      </div>
      {bars ? (
        <div className="newappearance">
          <div className="rwd-logo">
            <h3>
              Appliance <FontAwesomeIcon icon={faBlenderPhone} />
            </h3>
          </div>

          <div className="rwd-hdr-right-side">
            <h2>Explore</h2>
            <i>
              <FontAwesomeIcon icon={faHeart} size="2xl" />{" "}
              <small>wishlist</small>
            </i>

            <i>
              <FontAwesomeIcon icon={faCartArrowDown} size="2xl" />{" "}
              <small>cart</small>
            </i>
            <i>
              <FontAwesomeIcon icon={faAddressCard} size="2xl" />{" "}
              <small>details</small>
            </i>

            <button className="rwd-login-btn">Login</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export {Header as default}

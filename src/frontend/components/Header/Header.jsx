import { NavLink } from "react-router-dom";

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
import { useState } from "react";

export const Header = () => {
  const [bars, setBars] = useState(false);
  return (
    <div>
      <div className="header-container">
        <NavLink to="/" className="remove-ud">
          <div className="hdr-logo">
            <FontAwesomeIcon icon={faBlenderPhone} />
            <h2 className="logo-name">~Decor Super Market~</h2>
          </div>
        </NavLink>

        <div className="search-baar">
          <NavLink to="./product-listing">
            <input type="search" placeholder="Search..." size="30" />
          </NavLink>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </div>

        <div className="hdr-right-side">
          <NavLink to="./product-listing" className="remove-ud">
            <h2>Explore</h2>
          </NavLink>
          <NavLink to="./wish-list">
            <div>
              <p className="c-w-count">0</p>
              <br />
              <FontAwesomeIcon icon={faHeart} size="2xl" />
            </div>
          </NavLink>

          <NavLink to="./cart">
            <div>
              <p className="c-w-count">9</p><br />
              <FontAwesomeIcon icon={faCartArrowDown} size="2xl" />
            </div>
          </NavLink>
          <FontAwesomeIcon icon={faAddressCard} size="2xl" />
          <NavLink to="/login">
            <button className="hrd-login-btn">Login</button>
          </NavLink>
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

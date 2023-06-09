import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Tippy from "@tippyjs/react";

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

export const Header = ({ bars, setBars }) => {
  const headerNavigate = [
    {
      to: "/wish-list",
      icon: faHeart,
    },
    {
      to: "/cart",
      icon: faCartArrowDown,
    },
    {
      to: "/user-profile",
      icon: faAddressCard,
    },
  ];
  const [isUserCaseOpen, setIsUserCaseOpen] = useState(false);
  const { setfilterDispatch, search } = useContext(filterContext);
  const { cart, wishList, setProductDispatch } = useContext(productContext);
  const { token, user, setAuthDispatch } = useContext(authContext);
  const navigate = useNavigate();
  const userLogoutHandler = () => {
    setAuthDispatch({ type: "USER_LOGOUT" });
    setProductDispatch({ type: "USER_LOGGED_OUT" });

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.info("logged out successfully", {
      autoClose: 2000,
      className: "toast-styling",
    });
  };

  return (
    <>
      <div>
        <div className="header-container">
          <Link to="/" className="remove-ud">
            <div className="hdr-logo">
              <FontAwesomeIcon icon={faBlenderPhone} />
              <h2 className="logo-name">~Decor Super Market~</h2>
            </div>
          </Link>

          <div className="search-baar">
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
              onKeyPress={(e) => e.which === 13 && navigate("/product-listing")}
            />
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

                <Tippy content="wishlist" delay={[700, 0]}>
                  <FontAwesomeIcon icon={faHeart} size="2xl" />
                </Tippy>
              </div>
            </Link>

            <Link to="/cart">
              <div>
                <p className="c-w-count">{cart.length}</p>
                <br />
                <Tippy content="Cart" delay={[700, 0]}>
                  <FontAwesomeIcon icon={faCartArrowDown} size="2xl" />
                </Tippy>
              </div>
            </Link>

            <Tippy content="address" delay={[700, 0]}>
              <FontAwesomeIcon
                icon={faAddressCard}
                size="2xl"
                onClick={() => {
                  setIsUserCaseOpen(!isUserCaseOpen);
                }}
              />
            </Tippy>

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
          <div className="rwd-hdr-right-side">
            <Link to="/" onClick={() => setBars(false)}>
              <h5>Home</h5>
            </Link>

            <Link to="/product-listing" onClick={() => setBars(false)}>
              <h5>Explore</h5>
            </Link>

            {headerNavigate.map(({ to, icon }, index) => {
              return (
                <Link to={to} onClick={() => setBars(false)} key={index}>
                  <i>
                    <FontAwesomeIcon icon={icon} />
                  </i>
                </Link>
              );
            })}

            <Link to="/login" onClick={() => setBars(false)}>
              {token ? (
                <button className="rwd-login-btn" onClick={userLogoutHandler}>
                  Log out
                </button>
              ) : (
                <button className="rwd-login-btn">log in</button>
              )}
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      {token && (
        <>
          {isUserCaseOpen && (
            <div className="user-detail-space">
              <h2>name</h2>
              <p className="current-user-detail">{user.fullName}</p>
              <h2>email</h2>
              <p className="current-user-detail">{user.email}</p>
              <Link to="/user-profile" onClick={() => setIsUserCaseOpen(false)}>
                <button className="address-btn">Address Manegement</button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export { Header as default };

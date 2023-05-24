import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//internal imports
import "./Home.css";
import "../../components/Header/Header.css";
import { Footer } from "../../components/Footer/Footer";
import {
  purple,
  godregBrand,
  hometownBrand,
  nilKamal,
  woodenStreetBrand,
} from "../../assets";
import { filterContext } from "../../hooks/context/filterContext";
import { productContext } from "../../hooks/context/productsContext";

export const Home = () => {
  const { categoriesData, setfilterDispatch } = useContext(filterContext);
  const {getCartItem}=useContext(productContext)
  const navigate = useNavigate();

  const setCategoryNavigate = (categoryName) => {
    if (categoryName === "Bed") {
      setfilterDispatch({
        type: "FILTER_BEDS",
        payload: true,
      });
    }
    if (categoryName === "Luxury set") {
      setfilterDispatch({
        type: "FILTER_LUXURY_SET",
        payload: true,
      });
    }
    if (categoryName === "Dressing Table") {
      setfilterDispatch({
        type: "FILTER_DRESSING_TABLES",
        payload: true,
      });
    }
    if (categoryName === "Sofa") {
      setfilterDispatch({
        type: "FILTER_SOFAS",
        payload: true,
      });
    }
    navigate("/product-listing");
  };
  return (
    <>
      <div className="hero-img-case">
        <img src={purple} alt="landing-hero" className="hero-image" />
        <center>
          <Link to="/product-listing">
            <button className="button" >
              <span>Shop Now!! </span>
            </button>
          </Link>
        </center>
      </div>

      {/*  */}
      <h1 className="category-desc">Top Categories of the year</h1>
      <div className="home-categories">
        {categoriesData.map(({ categoryImage, categoryName }, index) => {
          return (
            <figure
              onClick={() => setCategoryNavigate(categoryName)}
              key={index}
            >
              <img
                className="uniq-img"
                src={categoryImage}
                alt={categoryName}
              />
              <h2>{categoryName}</h2>
            </figure>
          );
        })}
      </div>
      {/*  */}

      <h1 className="category-desc brand-desc">Top Brands</h1>
      <div className="brands-case">
        <img src={godregBrand} alt="" className="unique-brands" />
        <img src={hometownBrand} alt="" className="unique-brands" />
        <img src={nilKamal} alt="" className="unique-brands" />
        <img src={woodenStreetBrand} alt="" className="unique-brands" />
      </div>
      <Footer />
    </>
  );
};

export { Home as default };

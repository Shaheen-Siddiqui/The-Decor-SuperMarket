import { useContext } from "react";
import { Link } from "react-router-dom";
//internal imports
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import {
  purple,
  godregBrand,
  hometownBrand,
  nilKamal,
  woodenStreetBrand,
} from "../../assets";
import { filterContext } from "../../hooks/context/filterContext";

export const Home = () => {
  const { categoriesData, setfilterDispatch } = useContext(filterContext);

  return (
    <>
      <div className="hero-img-case">
        <img src={purple} alt="hero-image" className="hero-image" />
        <center>
          <Link to="/product-listing">
            <button className="button">
              <span>Shop Now!! </span>
            </button>
          </Link>
        </center>
      </div>

      {/*  */}
      <h1 className="category-desc">Top Categories of the year</h1>

      <div className="home-categories">
        {categoriesData.map(({ categoryImage, categoryName }) => {
          return (
            <Link to={`/product-listing/${categoryName}`} key={categoryName}>
              <figure>
                <img
                  className="uniq-img"
                  src={categoryImage}
                  alt={categoryName}
                />
                <h2>{categoryName}</h2>
              </figure>
            </Link>
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

// onClick={() =>
//   setfilterDispatch({
//     type:
//       categoryName == "Bed"
//         ? "FILTER_BEDS"
//         : categoryName == "Dressing Table"
//         ? "FILTER_DRESSING_TABLES"
//         : categoryName == "Sofa"
//         ? "FILTER_SOFAS"
//         : categoryName == "Luxury set"
//         ? "FILTER_LUXURY_SET"
//         : "SEARCH_PRODUCTS",
//   })
// }
export { Home as default };

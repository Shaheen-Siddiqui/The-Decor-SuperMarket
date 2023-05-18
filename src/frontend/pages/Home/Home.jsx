import { NavLink } from "react-router-dom";
//internal imports
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import {
  purple,
  image1,
  image3,
  image5,
  image6,
  godregBrand,
  hometownBrand,
  nilKamal,
  woodenStreetBrand,
} from "../../assets";
const imageObject = [
  {
    image: image1,
    desc: "Dressing Table",
  },
  {
    image: image6,
    desc: "Luxury set",
  },
  {
    image: image5,
    desc: "Sofa",
  },
  {
    image: image3,
    desc: "Bed",
  },
];
export const Home = () => {
  return (
    <>
      <div className="hero-img-case">
        <img src={purple} alt="hero-image" className="hero-image" />
        <center>
          <NavLink to="/product-listing">
            <button className="button">
              <span>Shop Now!! </span>
            </button>
          </NavLink>
        </center>
      </div>
      <h1 className="category-desc">Top Categories of the year</h1>

      <div className="home-categories">
        {imageObject.map(({ image, desc }) => {
          return (
            <NavLink to="/product-listing">
              <figure>
                <img className="uniq-img" src={image} alt={desc} />
                <h2>{desc}</h2>
              </figure>
            </NavLink>
          );
        })}
      </div>

      <h1 className="category-desc brand-desc">Top Brands</h1>
      <div></div>

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

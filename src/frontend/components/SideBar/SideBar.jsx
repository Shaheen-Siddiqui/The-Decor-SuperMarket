import "./SideBar.css";

export const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="filters">
          <h1>Filters</h1>

          <button>Reset</button>
        </div>
        <div className="price-case">
          <h1>Price</h1>
          <p>(₹ 0 - ₹ 1500 )</p>
          <input type="range" id="price-case" />
        </div>

        <div className="category-case">
          <h3>Category</h3>
          <label htmlFor="bed">
            <input type="checkbox" name="category" id="bed" /> Bed's
          </label>

          <label htmlFor="almirah">
            <input type="checkbox" id="almirah" /> Almirah's
          </label>

          <label htmlFor="Dressing Table's">
            <input type="checkbox" id="Dressing Table's" /> Dressing Table's
          </label>

          <label htmlFor="sofa">
            <input type="checkbox" id="sofa" /> Sofa's
          </label>

          <label htmlFor="luxury set">
            <input type="checkbox" /> luxury Set's
          </label>
        </div>

        <div className="rating-case">
          <h3>Rating</h3>
          <label htmlFor="4&above">
            <input type="radio" id="4&above" /> 4 stars & above
          </label>

          <label htmlFor="4&above">
            <input type="radio" id="3&above" /> 3 stars & above
          </label>

          <label htmlFor="4&above">
            <input type="radio" id="2&above" /> 2 stars & above
          </label>

          <label htmlFor="4&above">
            <input type="radio" id="1&above" /> 1 stars & above
          </label>
        </div>

        <div className="price-sorting-case">
          <h3>Sort By</h3>

          <label htmlFor="high-to-low">
            <input type="radio" id="high-to-low" />
            Price High to Low
          </label>

          <label htmlFor="low-to-high">
            <input type="radio" id="low-to-high" />
            Price Low to High
          </label>
        </div>
      </div>
    </>
  );
};

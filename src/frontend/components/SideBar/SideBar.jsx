import "./SideBar.css";
import { ProductContext } from "../../hooks/context/ProductContext";
import { useContext } from "react";

export const SideBar = () => {
  const {
    setProductDispatch,
    sort,
    rating,
    priceRange,
    beds,
    sofa,
    luxurySets,
    dressingTables,
  } = useContext(ProductContext);

  return (
    <>
      <div className="sidebar-container">
        <div className="filters">
          <h1>Filters</h1>

          <button
            onClick={() => setProductDispatch({ type: "RESET_ALL_FILTER" })}
          >
            Reset
          </button>
        </div>
        <div className="price-case">
          <h1 className="filter-price">Price</h1>
          <p>(₹ 0 - ₹ {!priceRange ? 1200 : priceRange} )</p>
          <input
            value={priceRange}
            type="range"
            id="price-case"
            min="0"
            max="1200"
            step="100"
            onChange={(event) =>
              setProductDispatch({
                type: "PRICE_RANGE",
                payload: event.target.value,
              })
            }
          />
        </div>

        <div className="category-case">
          <h3>Category</h3>
          <label htmlFor="bed">
            <input
              checked={beds}
              type="checkbox"
              name="category"
              id="bed"
              onChange={(event) =>
                setProductDispatch({
                  type: "FILTER_BEDS",
                  payload: !event.target.checked,
                })
              }
            />{" "}
            Bed's
          </label>

          <label htmlFor="Dressing Table's">
            <input
              checked={dressingTables}
              type="checkbox"
              id="Dressing Table's"
              onChange={(event) =>
                setProductDispatch({
                  type: "FILTER_DRESSING_TABLES",
                  payload: !event.target.checked,
                })
              }
            />
            Dressing Table's
          </label>

          <label htmlFor="sofa">
            <input
              checked={sofa}
              type="checkbox"
              id="sofa"
              onChange={(event) =>
                setProductDispatch({
                  type: "FILTER_SOFAS",
                  payload: !event.target.checked,
                })
              }
            />
            Sofa's
          </label>

          <label htmlFor="luxury set">
            <input
              checked={luxurySets}
              type="checkbox"
              id="luxury set"
              onChange={(event) =>
                setProductDispatch({
                  type: "FILTER_LUXURY_SET",
                  payload: !event.target.checked,
                })
              }
            />
            luxury Set's
          </label>
        </div>

        <div className="rating-case">
          <h3>Rating</h3>
          <label htmlFor="4&above">
            <input
              type="radio"
              id="4&above"
              checked={rating == "4"}
              value="4"
              onChange={(event) =>
                setProductDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            4 stars & above
          </label>

          <label htmlFor="3&above">
            <input
              type="radio"
              id="3&above"
              checked={rating == "3"}
              value="3"
              onChange={(event) =>
                setProductDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            3 stars & above
          </label>

          <label htmlFor="2&above">
            <input
              type="radio"
              id="2&above"
              checked={rating == "2"}
              value="2"
              onChange={(event) =>
                setProductDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            2 stars & above
          </label>

          <label htmlFor="1&above">
            <input
              type="radio"
              id="1&above"
              checked={rating == "1"}
              value="1"
              onChange={(event) =>
                setProductDispatch({
                  type: "RATINGS",
                  payload: event.target.value,
                })
              }
            />{" "}
            1 stars & above
          </label>
        </div>

        <div className="price-sorting-case">
          <h3>Sort By</h3>

          <label htmlFor="high-to-low">
            <input
              name="sort"
              type="radio"
              id="high-to-low"
              value="high_to_low"
              checked={sort === "high_to_low"}
              onChange={(event) =>
                setProductDispatch({
                  type: "SORT_BY_PRICE",
                  payload: event.target.value,
                })
              }
            />
            Price High to Low
          </label>

          <label htmlFor="low-to-high">
            <input
              type="radio"
              id="low-to-high"
              value="low_to_high"
              checked={sort === "low_to_high"}
              onChange={(event) =>
                setProductDispatch({
                  type: "SORT_BY_PRICE",
                  payload: event.target.value,
                })
              }
            />
            Price Low to High
          </label>
        </div>
      </div>
    </>
  );
};

import { useContext } from "react";

import "./UserProfile.css";
import "../../components/Header/Header.css";
import "../Authentication/authentication.css";
import { SavedAddress } from "./SavedAddress";
import { productContext } from "../../hooks/context/productsContext";

export const UserProfile = () => {
  const {
    userAddress: {
      hoseNumber,
      city,
      state,
      countaryName,
      postalCode,
      mobileNumber,
    },
    setProductDispatch,
  } = useContext(productContext);

  const addressHandler = (event) => {
    event.preventDefault();
    setProductDispatch({ type: "ADDRESS_FORM_SUBMIT" });
  };

  return (
    <>
      <div className="form-container" id="address-form-case">

        <form
          className="login-form signup-form" id="address-form"
          onSubmit={addressHandler}
        >
          <h1 className="form-text">Manage Address</h1>&nbsp;
          <input
            value={hoseNumber}
            autoComplete="off"
            // required
            type="text"
            id="houseNumber"
            name="hoseNumber"
            className="form-inp"
            placeholder="Enter House No. Road, Colony"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              })
            }
          />
          &nbsp;
          <input
            value={city}
            className="form-inp"
            type="city"
            id="city"
            // required
            name="city"
            placeholder="Enter City"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              })
            }
          />
          &nbsp;
          <input
            // required
            value={state}
            name="state"
            className="form-inp"
            id="state"
            autoComplete="off"
            placeholder="Enter State"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: { name: event.target.name, value: event.target.value },
              })
            }
          />
          &nbsp;
          <input
            // required
            value={countaryName}
            className="form-inp"
            autoComplete="off"
            id="countaryName"
            name="countaryName"
            placeholder="Enter Countary Name"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              })
            }
          />
          &nbsp;
          <input
            // required
            value={postalCode}
            className="form-inp"
            autoComplete="off"
            id="postalCode"
            name="postalCode"
            placeholder="Enter ZIP/ Postal code"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              })
            }
          />
          &nbsp;
          <input
            // required
            value={mobileNumber}
            className="form-inp"
            autoComplete="off"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            onChange={(event) =>
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              })
            }
          />
          <button type="submit" className="login-btns">
            Save New Address
          </button>
        </form>

        <div className="left-address-case">
          <SavedAddress />
        </div>


      </div>
    </>
  );
};

export { UserProfile as default };
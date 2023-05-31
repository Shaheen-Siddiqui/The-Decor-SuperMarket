import { useContext, useState } from "react";

import "./UserProfile.css";
import "../../components/Header/Header.css";
import "../Authentication/authentication.css";
import { SavedAddress } from "./SavedAddress";
import { productContext } from "../../hooks/context/productsContext";
import { toast } from "react-toastify";

export const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const {
    userAddress: {
      hoseNumber,
      city,
      state,
      countaryName,
      postalCode,
      mobileNumber,
      userName
    },
    setProductDispatch,
  } = useContext(productContext);

  const addressHandler = (event) => {
    event.preventDefault();
    if (
      userName &&
      hoseNumber &&
      city &&
      state &&
      countaryName &&
      postalCode &&
      mobileNumber
    ) {
      setProductDispatch({ type: "ADDRESS_FORM_SUBMIT" });
    }
  };

  return (
    <>
      <div className="form-container" id="address-form-case">
        <form
          className="login-form signup-form"
          id="address-form"
          onSubmit={addressHandler}
        >
          <h1 className="form-text">Manage Address</h1>&nbsp;
          <input
            required
            value={userName}
            autoComplete="off"
            type="text"
            id="userName"
            name="userName"
            className="form-inp"
            placeholder="Enter Your name"
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
            required
            value={hoseNumber}
            autoComplete="off"
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
            required
            value={city}
            className="form-inp"
            type="city"
            id="city"
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
            required
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
            required
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
            required
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
            required
            value={mobileNumber}
            className="form-inp"
            autoComplete="off"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            onChange={(event) => {
              setProductDispatch({
                type: "SET_USER_ADDRESS",
                payload: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
          />
          <button
            type="submit"
            className="login-btns"
            onClick={() => {
              isEdit &&
                toast.success("ADDRESS UPDATED", {
                  className: "toast-styling",
                  autoClose: 1000,
                });

              setIsEdit(false);
            }}
          >
            <strong>{isEdit ? "EDIT ADDRESS" : "SAVE ADDRESS"} </strong>
          </button>
          <button
            className="login-btns "
            id="dummy-addredd-top"
            type="button"
            onClick={() => setProductDispatch({ type: "SET_DUMMY_ADDRESS" })}
          >
            <strong>FILL WITH DUMMY ADDRESS</strong>
          </button>
        </form>

        <div className="left-address-case">
          <SavedAddress isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>
      </div>
    </>
  );
};

export { UserProfile as default };

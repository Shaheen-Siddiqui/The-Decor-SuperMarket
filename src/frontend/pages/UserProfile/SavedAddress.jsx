import "./UserProfile.css";
import { useContext } from "react";
import { changeOfAddress } from "../../assets";
import { productContext } from "../../hooks/context/productsContext";
import { toast } from "react-toastify";

export const SavedAddress = ({ setIsEdit }) => {
  const { obtainUserAddress, setProductDispatch } = useContext(productContext);
  return (
    <>
      <u>
        <h2>You can add multiple addresses</h2>
      </u>
      {!obtainUserAddress.length ? (
        <img src={changeOfAddress} alt="empaty-address-needed" />
      ) : (
        <>
          {obtainUserAddress.map(
            (
              {
                userName,
                hoseNumber,
                city,
                state,
                countaryName,
                postalCode,
                mobileNumber,
              },
              index
            ) => {
              return (
                <div key={index}>
                  <div className="address-case">
                    <div className="address-placehilder">
                      <p>
                        <strong>user Name: </strong>
                      </p>
                      <p>
                        <strong>House Number: </strong>
                      </p>
                      <p>
                        <strong> State: </strong>
                      </p>
                      <p>
                        <strong> City: </strong>
                      </p>
                      <p>
                        <strong> ZIP/Postal: </strong>
                      </p>
                      <p>
                        <strong> Countary </strong>
                      </p>
                      <p>
                        <strong> Phone Number: </strong>
                      </p>
                    </div>

                    <div className="address-value">
                      <p>{userName}</p>
                      <p> {hoseNumber} </p>
                      <p> {state}</p>
                      <p> {city}</p>
                      <p> {postalCode}</p>
                      <p> {countaryName}</p>
                      <p> {mobileNumber}</p>
                    </div>
                  </div>
                  <div className="delete-edit-case">
                    <button
                      className="delete-edit-btn delete-address"
                      onClick={() => {
                        setProductDispatch({
                          type: "DELETE_ADDRESS",
                          payload: index,
                        });
                        toast.error("Address Deleted", {
                          className: "toast-styling",
                          autoClose: 1000,
                        });
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="delete-edit-btn edit-address"
                      onClick={() => {
                        setProductDispatch({
                          type: "EDIT_ADDRESS",
                          payload: index,
                        });
                        setIsEdit(true);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </>
      )}
    </>
  );
};

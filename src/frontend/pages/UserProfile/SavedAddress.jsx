import "./UserProfile.css";
import { useContext } from "react";
import { changeOfAddress } from "../../assets";
import { productContext } from "../../hooks/context/productsContext";

export const SavedAddress = () => {
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
                      onClick={() =>
                        setProductDispatch({
                          type: "DELETE_ADDRESS",
                          payload: index,
                        })
                      }
                    >
                      Delete
                    </button>
                    <button className="delete-edit-btn edit-address">
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

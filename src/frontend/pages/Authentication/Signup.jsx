import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// internal imports
import "./authentication.css";
import { toast } from "react-toastify";
import { obtainSignedUpUserData } from "./authApiCall/signUpApi";
import { authContext } from "../../hooks/context/authContext";
import { productContext } from "../../hooks/context/productsContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const RedirecToLocation = location.state?.pathname || "/";

  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, seConfirmPasswordIcon] = useState(false);
  const { setAuthDispatch } = useContext(authContext);

  const [userInformation, setUserInformation] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const { fullName, email, password, confirmPassword } = userInformation;

  const isPasswordMatch = () => {
    if (password !== confirmPassword) {
      toast.error("password dose not match", {
        className: "toast-styling",
        autoClose: 1000,
      });
    } else {
      return true;
    }
  };
  const userSignedUpHandler = (event) => {
    event.preventDefault();
    obtainSignedUpUserData(
      email,
      password,
      fullName,
      isPasswordMatch,
      setAuthDispatch,
      navigate,
      RedirecToLocation,
    );
  };

  return (
    <>
      <div className="form-container">
        <form className="login-form signup-form" onSubmit={userSignedUpHandler}>
          <h1 className="form-text">Sign Up</h1>

          <label className="form-lable" htmlFor="fullname">
            Full Name
          </label>
          <input
            value={fullName}
            autoComplete="off"
            required
            type="text"
            id="fullname"
            name="fullName"
            className="form-inp"
            placeholder="Enter your full Name"
            onChange={(event) =>
              setUserInformation({
                ...userInformation,
                fullName: event.target.value,
              })
            }
          />

          <label className="form-lable" htmlFor="email">
            Email Address*
          </label>
          <input
            value={email}
            className="form-inp"
            type="email"
            id="email"
            required
            name="email"
            placeholder="admin@gmail.com"
            onChange={(event) =>
              setUserInformation({
                ...userInformation,
                email: event.target.value,
              })
            }
          />

          <label className="form-lable" htmlFor="password">
            Password*
          </label>
          <div className="hide-input-case">
            <input
              className="hided-input"
              value={password}
              type={passwordIcon ? "password" : "text"}
              id="password"
              autoComplete="off"
              name="password"
              placeholder="Enter your password"
              onChange={(event) =>
                setUserInformation({
                  ...userInformation,
                  password: event.target.value,
                })
              }
            />
            {passwordIcon ? (
              <FontAwesomeIcon
                className="eye-icon"
                icon={faEyeSlash}
                onClick={() => setPasswordIcon(!passwordIcon)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="eye-icon"
                onClick={() => setPasswordIcon(!passwordIcon)}
              />
            )}
          </div>

          <label className="form-lable" htmlFor="confirm-password">
            Confirm password
          </label>

          <div className="hide-input-case">
            <input
              className="hided-input"
              value={confirmPassword}
              autoComplete="off"
              type={confirmPasswordIcon ? "password" : "text"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter your confirmPassword"
              onChange={(event) =>
                setUserInformation({
                  ...userInformation,
                  confirmPassword: event.target.value,
                })
              }
            />
            {confirmPasswordIcon ? (
              <FontAwesomeIcon
                className="eye-icon"
                icon={faEyeSlash}
                onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="eye-icon"
                onClick={() => seConfirmPasswordIcon(!confirmPasswordIcon)}
              />
            )}
          </div>

          <button type="submit" className="login-btns">
            Register
          </button>

          <p className="new-account">
            Already have account?
            <Link to="/login">
              <strong>
                <u>Login Here</u>
              </strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export { SignUp as default };

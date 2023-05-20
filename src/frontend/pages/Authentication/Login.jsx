import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./authentication.css";
import { obtainLoggedInUserData } from "./authApiCall/logInApi";
import { authContext } from "../../hooks/context/authContext";

export const LogIn = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);

  const [userLoginCredential, setUserLoginCredential] = useState({
    email: "",
    password: "",
  });
  const { setAuthDispatch } = useContext(authContext);
  const { email, password } = userLoginCredential;

  const userLoginHandler = (event) => {
    event.preventDefault();
    console.log(userLoginCredential);
    obtainLoggedInUserData(email, password, setAuthDispatch);
  };

  const guestCredentialHandler = (event) => {
    setUserLoginCredential({
      ...userLoginCredential,
      email: "admin@gmail.com",
      password: "admin_123",
    });
    console.log(userLoginCredential);
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={userLoginHandler}>
        <h1 className="form-text">Login</h1>

        <label className="form-lable" htmlFor="email">
          Email Address*
        </label>
        <input
          value={email}
          className="form-inp"
          id="email"
          type="text"
          required
          onChange={(event) =>
            setUserLoginCredential({
              ...userLoginCredential,
              email: event.target.value,
            })
          }
        />
        <label className="form-lable" htmlFor="password">
          Password*
        </label>

        <div className="hide-input-case">
          <input
            value={password}
            type={passwordIcon ? "password" : "text"}
            className="hided-input"
            required
            id="password"
            onChange={(event) =>
              setUserLoginCredential({
                ...userLoginCredential,
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
        <button
          className="login-btns"
          type="submit"
          onClick={guestCredentialHandler}
        >
          Enter Guest credentials
        </button>
        <button className="login-btns" type="submit">
          LogIn
        </button>
        <p className="new-account">
          Not a user yet?
          <Link to="/sign-up">
            <strong>
              <u>Create Acoount</u>
            </strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export {LogIn as default }

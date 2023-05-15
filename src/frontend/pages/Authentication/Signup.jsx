import { NavLink } from "react-router-dom";

//internal imports
import "./authentication.css";

export const SignUp = () => {
  return (
    <>
      <div className="form-container">
        <form className="login-form signup-form">
          <h1 className="form-text">Sign Up</h1>

          <label className="form-lable" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="form-inp"
            type="text"
            id="fullname"
            required
            placeholder="Enter your full Name"
          />

          <label className="form-lable" htmlFor="email">
            {" "}
            Email Address*
          </label>
          <input
            className="form-inp"
            type="email"
            id="email"
            required
            placeholder="admin@gmail.com"
          />

          <label className="form-lable" htmlFor="password">
            Password*
          </label>
          <input
            className="form-inp"
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <label className="form-lable" htmlFor="confirm-password">
            Confirm password
          </label>
          <input
            className="form-inp"
            type="text"
            id="confirm-password"
            placeholder="Enter your password again"
          />

          <button type="submit" className="login-btns">
            Register
          </button>

          <p className="new-account">
          Already have account?
          <NavLink to="/login">

          <strong>
            <u>Login Here</u>
          </strong>
          </NavLink>
        </p>
        </form>
      </div>
    </>
  );
};

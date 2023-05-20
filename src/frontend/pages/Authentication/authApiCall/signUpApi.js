import axios from "axios";
import { toast } from "react-toastify";
import "../../ProductListing/ProductListing.css";

export async function obtainSignedUpUserData(
  email,
  password,
  fullName,
  isPasswordMatch,
  setAuthDispatch
) {
  if (isPasswordMatch()) {
    try {
      const Response = await axios.post(`/api/auth/signup`, {
        email,
        password,
        fullName,
      });
      if (Response.status === 201) {
        localStorage.setItem("user", JSON.stringify(Response.data.createdUser));
        localStorage.setItem("token", Response.data.encodedToken);
        toast.success("Congratulations! Your account has been created", {
          className: "toast-styling",
          autoClose: 2000,
        });
        setAuthDispatch({
          type: "USER_SIGNUP",
          payload: {
            user: Response.data.createdUser,
            token: Response.data.encodedToken,
          },
        });
      } else {
        toast.error("Something went wrong", {
          className: "toast-styling",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(`Unprocessable Entity. Email Already Exists`, {
        className: "toast-styling",
        autoClose: 2000,
      });

      console.log(error);
    }
  }
}
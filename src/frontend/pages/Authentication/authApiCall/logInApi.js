import axios from "axios";
import { toast } from "react-toastify";
import "../../ProductListing/ProductListing.css";

export async function obtainLoggedInUserData(email, password, setAuthDispatch) {
  try {
    const Response = await axios.post("/api/auth/login", { email, password });
    if (Response.status == 200) {
      console.log(Response.data);
      localStorage.setItem("user", JSON.stringify(Response.data.foundUser));
      localStorage.setItem("token", JSON.stringify(Response.data.encodedToken));
      setAuthDispatch({
        type: "USER_LOGIN",
        payload: {
          user: Response.data.foundUser,
          token: Response.data.encodedToken,
        },
      });
      toast.success("successfully logged in", {
        className: "toast-styling",
        autoClose: 2000,
      });
    } else {
      toast.error("The credentials you entered are invalid");
    }
  } catch (error) {
    console.log(error.message);
    toast.error("The Credentials you entered is not Registered", {
      className: "toast-styling",
      autoClose: 2000,
    });
  }
}

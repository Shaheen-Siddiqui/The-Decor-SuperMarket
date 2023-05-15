import "./Login.css";
export const LogIn = () => {
  return (
    <div className="form-container">
      <form  class="login-form">
          <h1 className="form-text">Login</h1>
          <label class="form-lable" for="name">
            Name:
          </label>
          <input class="form-inp" type="text" />
          <label class="form-lable" for="e-mail">
            Email
          </label>
          <input class="form-inp" type="text" />

          <button className="login-btns">Enter Guest credentials</button>
          <button className="login-btns" type="submit">
            LogIn
          </button>
          <p className="new-account">
            Not a user yet?
            <strong>
              <u>Create Acoount</u>
            </strong>
          </p>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [login, setLogin] = useState(true);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.warn("Hello");
  };
  return (
    <div className="login">
      <div className="login-left">
        <img src="./login-girl.jpg" alt="" />
      </div>
      <div className="login-right">
        {login ? <h1>Welcome Back</h1> : <h1>Create an Account</h1>}

        <form onSubmit={handleLogin} action="" className="login-form">
          {!login && (
            <>
              <div>
                <label htmlFor="file">
                  <img src={avatar.url || "./avatar.png"} alt="" />
                  Upload an image
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleAvatar}
                />
              </div>
              <input type="text" name="username" placeholder="Username" />
            </>
          )}
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" className="login-btn">
            {login ? "Login" : "SignUp"}
          </button>
          <span>or</span>
          <button
            type="button"
            onClick={() => setLogin((prev) => !prev)}
            className="signup-btn"
          >
            {login ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

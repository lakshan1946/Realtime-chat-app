import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Upload from "../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  // console.log(avatar.url);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      if (login) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully");
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const imgUrl = await Upload(avatar.file);
        await setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          avatar: imgUrl,
          id: res.user.uid,
          blocked: [],
        });
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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
          <button disabled={loading} type="submit" className="login-btn">
            {loading ? "Loading" : login ? "Login" : "Signup"}
          </button>

          <span>or</span>
          <button
            disabled={loading}
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

import React, { useState } from "react";
import "./userInfo.css";
import { useUserStore } from "../../lib/userStore";

const UserInfo = ({ setShowDetail }) => {
  const setShowDetails = () => {
    setShowDetail((prev) => !prev);
  };
  const { currentUser } = useUserStore();

  // console.log(currentUser);
  return (
    <div className="userInfo">
      <div className="user" onClick={setShowDetails}>
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;

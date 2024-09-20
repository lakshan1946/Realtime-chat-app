import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="searchbox">
        <div className="search">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <div className="add-btn">
          <img
            onClick={() => {
              setAddMode((prev) => !prev);
            }}
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
          />
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane dee</span>
          <p>hellow</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;

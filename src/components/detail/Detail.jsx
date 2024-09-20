import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Lakshan madhusanaks</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="arrowDown.png" alt="" />
          </div>
        </div>
        <div className="photos">
          <div className="photo">
            <div className="photo-detail">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                alt=""
              />
              <span>nature</span>
            </div>
            <img className="download-img" src="./download.png" alt="" />
          </div>
          <div className="photo">
            <div className="photo-detail">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                alt=""
              />
              <span>nature</span>
            </div>
            <img className="download-img" src="./download.png" alt="" />
          </div>
          <div className="photo">
            <div className="photo-detail">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                alt=""
              />
              <span>nature</span>
            </div>
            <img className="download-img" src="./download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button className="block-btn">Block User</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Detail;

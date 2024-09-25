import React from "react";
import "./Detail.css";
import { auth, db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { useChatStore } from "../lib/chatStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();
  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked
          ? arrayRemove(user.user.id)
          : arrayUnion(user.user.id),
      });
      changeBlock();
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.user?.username}</h2>
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
        <button onClick={handleBlock} className="block-btn">
          {isCurrentUserBlocked
            ? "You are blocked"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button onClick={() => auth.signOut()} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;

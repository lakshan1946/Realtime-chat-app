import React from "react";
import "./Detail.css";
import { auth, db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { useChatStore } from "../lib/chatStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import UserAccordion from "./UserAccordion";

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
        <UserAccordion />
        <button onClick={handleBlock} className="block-btn">
          {isCurrentUserBlocked
            ? "You are blocked"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="block-btn">Report User</button>
        <button className="block-btn">Delete Chat</button>
      </div>
    </div>
  );
};

export default Detail;

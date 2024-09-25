import React from "react";
import "./List.css";
import UserInfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";

const List = ({ setShowDetail }) => {
  return (
    <div className="list">
      <UserInfo setShowDetail={setShowDetail} />
      <ChatList />
    </div>
  );
};

export default List;

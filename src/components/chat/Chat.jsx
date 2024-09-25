import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import "./Chat.css";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useChatStore } from "../lib/chatStore";
import { useUserStore } from "../lib/userStore";
import Upload from "../lib/upload";

const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const endRef = useRef(null);

  const handleSend = async () => {
    if (text === "") return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await Upload(img.file);
      }
      await updateDoc(doc(db, "chats", chatId), {
        message: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setImg({
      file: null,
      url: "",
    });
    setText("");
  };

  const userIDs = [currentUser?.id, user?.user?.id];
  userIDs.forEach(async (id) => {
    const userChatsRef = doc(db, "userChats", id);
    const userChatsSnapshot = await getDoc(userChatsRef);

    if (userChatsSnapshot.exists()) {
      const userChatsData = userChatsSnapshot.data();

      const chatIndex = userChatsData.chats.findIndex(
        (c) => c.chatId === chatId
      );

      userChatsData[chatIndex].lastMessage = text;
      userChatsData[chatIndex].isSeen = id === currentUser.id ? true : false;
      userChatsData[chatIndex].updatedAt = Date.now();

      await updateDoc(userChatsRef, {
        chats: userChatsData.chats,
      });
    }
  });

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });
    return () => {
      unSub();
    };
  }, [chatId]);

  // console.log(chat);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  // console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.user?.avatar || "./avatar.png"} alt="" />
          <div className="text">
            <span>{user?.user?.username}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.message?.map((message) => (
          <div
            className={
              message.senderId === currentUser?.id ? "message-own" : "message"
            }
            key={message?.createAt}
          >
            <div className="text">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>1 min ago</span> */}
            </div>
          </div>
        ))}
        {img.url && (
          <div className="message-own">
            <div className="text">
              <img src={img.url} />
            </div>
          </div>
        )}

        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icon">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You cannot send a message"
              : "Type a message"
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="./emoji.png"
            alt=""
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          onClick={handleSend}
          className="send-btn"
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default Chat;

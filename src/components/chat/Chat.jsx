import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import "./Chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>Janse</span>
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
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              excepturi ut ad a distinctio optio magni nobis assumenda nam
              corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              excepturi ut ad a distinctio optio magni nobis assumenda nam
              corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              excepturi ut ad a distinctio optio magni nobis assumenda nam
              corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="text">
            <img
              src="https://media.istockphoto.com/id/1194741547/photo/she-is-my-best-friend.jpg?s=2048x2048&w=is&k=20&c=A9v2gB8dtL6xSwFX--08YXhjaAYEgeqSOkoN1KAiYYk="
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              excepturi ut ad a distinctio optio magni nobis assumenda nam
              corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              excepturi ut ad a distinctio optio magni nobis assumenda nam
              corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icon">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
        <button className="send-btn">send</button>
      </div>
    </div>
  );
};

export default Chat;

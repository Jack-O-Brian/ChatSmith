import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

import "../CSS/ChatroomList.css";

function ChatroomList() {
  const initialChatrooms = [
    { url: uuid(), name: "Kingdom" },
    { url: uuid(), name: "Cheeseland" },
    { url: uuid(), name: "Flownder" },
    { url: uuid(), name: "Chowder" },
  ];

  const initialState = JSON.parse(window.localStorage.getItem("chatrooms"));

  const [chatrooms, setChatrooms] = useState(initialState || initialChatrooms);

  useEffect(() => {
    window.localStorage.setItem("chatrooms", JSON.stringify(chatrooms));
  });

  const addChatroom = () => {
    const newName = prompt("Enter Name");
    if (newName) {
      const newChatrooms = chatrooms.map((chatroom) => {
        return chatroom;
      });

      newChatrooms.push({ url: uuid(), name: newName });

      setChatrooms(newChatrooms);
    }
  };

  return (
    <div className="ChatroomList">
      <div>
        {chatrooms.map((chatroom) => (
          <div className="ChatroomList-chatroomcontainer">
            <div className="ChatroomList-chatroomOption">{chatroom.name}</div>
          </div>
        ))}
      </div>
      <div className="ChatroomListAddButton" onClick={addChatroom}>
        +
      </div>
    </div>
  );
}

export default ChatroomList;

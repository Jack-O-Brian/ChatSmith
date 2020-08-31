import React, { useState, useEffect } from "react";

import "../CSS/ChatBox.css";

function ChatBox() {
  return (
    <div className="ChatBox">
      <div className="ChatBox-messageInputForm">
        <input
          required
          className="ChatBox-messageInput"
          type="text"
          name="message"
          placeholder="Message goes here"
          // value={this.state.message}
          // onChange={this.handleChange}
          id="inputmessage"
        />
      </div>
    </div>
  );
}

export default ChatBox;

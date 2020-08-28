import React from "react";
import ChatBox from "../components/ChatBox";
import ChatroomList from "../components/ChatroomList";
import UserList from "./UserList";

import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/App.css";
import "../CSS/Chatroom.css";

// API
import { login } from "../api/users.js";

export default class Chatroom extends React.Component {
  state = {
    message: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("YEA");
  };

  printMessage = () => {};

  render() {
    return (
      <div>
        <div className="ChatRoom-Components">
          <UserList className="UserList" />
          <ChatBox className="ChatBox" />
          <ChatroomList className="ChatroomList" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="message"
            placeholder="Message goes here"
            value={this.state.message}
            onChange={this.handleChange}
            id="inputmessage"
          />
          <br />
        </form>
      </div>
    );
  }
}

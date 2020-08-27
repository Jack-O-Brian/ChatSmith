import React from "react";
import ChatBox from "./ChatBox";
import ChatroomList from "./ChatroomList";
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
        <UserList />
        <ChatBox />
        <ChatroomList />
        <form onSubmit={this.handleSubmit}>
          {/* <input required type="text" name="user" placeholder="Which user?"  value={this.state.message} onChange={this.handleChange} id="inputmessage"/><br/> */}
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

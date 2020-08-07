import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import axios from "axios";
// import {test} from  "../api/users.js"
import { getUsers, deleteUser, newUser } from "../api/users.js";

class Model extends React.Component {
  state = {
    Users: [],
  };
  insertUser = () => {
    let name = prompt("Name");
    let user = prompt("Username");
    let pass = prompt("Password");

    newUser(name, user, pass).then(() => {
      this.refresh();
    });
  };

  // Get teh usewr and avoid having to now details about said user.
  getUser(index) {
    if (!this.state.Users.length || this.state.Users[index] == null) {
      var obj = { name: "", user: "", pass: "" };
      return obj.name;
    } else {
      return this.state.Users[index].name;
    }
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    getUsers().then((res) => this.setState({ Users: res }));
  }
  deleteUser(id) {
    deleteUser(id)
      .then((res) => {
        this.refresh();
      })
      .catch((err) => {
        console.dir(id);
        console.dir("ID is not found");
      });
  }
  displayUser() {
    return this.state.Users.map((user, index) => (
      <div key={index}>
        <Row md={4}>
          <Col>
            <Button
              onClick={() => this.deleteUser(this.state.Users[index]._id)}
            >
              {" "}
              Delete User?{" "}
            </Button>
          </Col>
          <Col>
            <b>Name: </b> {user.name}{" "}
          </Col>
          <Col>
            <b>Username:</b> {user.user}{" "}
          </Col>
          <Col>
            <b>Password:</b> {user.pass}{" "}
          </Col>
        </Row>
        <br />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Container>
          <Button onClick={() => this.insertUser()}> Insert User </Button>
          <br />
          <br />
          <Container>{this.displayUser()}</Container>
        </Container>
      </div>
    );
  }
}

export { Model };

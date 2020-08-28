import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v1 as uuid } from "uuid";

import "../CSS/UserList.css";

function UserList() {
  const initialUsers = [
    { id: uuid(), name: "Zaki", username: "D4C" },
    { id: uuid(), name: "Haroun", username: "Ragalah" },
    { id: uuid(), name: "Rae", username: "rdizzle420" },
    { id: uuid(), name: "Issa", username: "JustinBeaver" },
  ];
  const initialState = JSON.parse(window.localStorage.getItem("users"));

  const [users, setUsers] = useState(initialState || initialUsers);

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  });

  const addUser = () => {
    const newName = prompt("Enter Name");
    const newUsername = prompt("Enter Username");
    if (newName && newUsername) {
      const newUsers = users.map((user) => {
        return user;
      });

      newUsers.push({ id: uuid(), name: newName, username: newUsername });

      setUsers(newUsers);
    }
  };

  return (
    <div className="UserList">
      <button onClick={addUser}>Add User</button>
      <ListGroup>
        <TransitionGroup className="userList">
          {users.map((user) => (
            <CSSTransition key={user.id} timeout={500} classNames="fade">
              <ListGroupItem>
                {"Username:" + user.username}
                {"Name:" + user.name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
}

export default UserList;

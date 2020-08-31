import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import UserSettings from "./UserSettingsButton";
import ServerSettings from "./ServerSettingsButton";

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

  const [userSettingsState, toggleUserSettingsState] = useState(false);
  const [serverSettingsState, toggleServerSettingsState] = useState(false);

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

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  };

  return (
    <div className="UserList">
      <div>
        {users.map((user) => (
          <div className="UserList-usercontainer">
            <div className="UserList-user">
              {user.username}
              <UserSettings />
              {/* <button
                className="UserList-userSettingsBtn"
                onClick={() => removeUser(user.id)}
              >
                <img src={require("../Images/Cog-Unselected.png")} />
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div>
        <ServerSettings />
        {/* <button onClick={addUser}>
          <img src={require("../Images/Cog-Unselected.png")} />
        </button> */}
      </div>
    </div>
  );
}

export default UserList;

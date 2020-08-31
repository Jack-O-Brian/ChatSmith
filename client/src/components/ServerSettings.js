import React from "react";

import "../CSS/ServerSettings.css";

function ServerSettings() {
  return (
    <div className="UserList-serverSettingsMenu">
      <div className="ServerSettings-chatUrl">Chat URL</div>
      <button className="ServerSettings-DeleteBtn">Delete</button>
      <button className="ServerSettings-CancelBtn">Cancel</button>
      <button className="ServerSettings-LeaveServerBtn">Leave</button>
    </div>
  );
}

export default ServerSettings;

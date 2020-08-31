import React, { useState, useEffect, useRef } from "react";
import { Overlay } from "react-bootstrap";

import ServerSettings from "./ServerSettings";

function ServerSettingsButton() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <button
        className="UserList-serverSettingsBtn"
        //   onClick={() => removeUser(user.id)}
        ref={target}
        onClick={() => setShow(!show)}
      >
        <img
          src={
            show
              ? require("../Images/Cog-Selected.png")
              : require("../Images/Cog-Unselected.png")
          }
        />
      </button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div {...props}>
            <ServerSettings />
          </div>
        )}
      </Overlay>
    </>
  );
}

export default ServerSettingsButton;

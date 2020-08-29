import React, { useState, useEffect, useRef } from "react";
import { Overlay } from "react-bootstrap";

function UserSettings() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <button
        className="UserList-userSettingsBtn"
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
          <div
            {...props}
            style={{
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

export default UserSettings;

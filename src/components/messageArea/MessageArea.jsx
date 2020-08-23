import React from "react";
import "./MessageArea.css";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import Toolbar from "../toolbar/Toolbar.jsx";

const buttonStyle = {
  border: "none",
  display: "flex",
  backgroundColor: "white",
  marginLeft: "10px",
};
export default function MessageArea(props) {
  return (
    <div className="compose">
      <input
        type="text"
        className="compose-input"
        placeholder="Escibe un mensaje"
      />
      <button style={buttonStyle}>
        <ToolbarButton key="send" icon="ion-md-send" />
      </button>
    </div>
  );
}

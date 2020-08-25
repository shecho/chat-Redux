import React from "react";
import "./MessageArea.css";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";

const buttonStyle = {
  border: "none",
  display: "flex",
  backgroundColor: "white",
  marginLeft: "10px",
};
export default function MessageArea() {
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

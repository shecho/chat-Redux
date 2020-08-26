import React from "react";
import "./MessageItem.css";
import MessageOption from "../messageOption/MessajeOption.jsx";


const rowMessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
};
export default function Message() {
  return (
    <div className ='message'>
      <div className="bubble-container"  >
        <div className="bubble" style={rowMessageStyles}>
          <p>Mensaje </p>
          <p>  Hora</p>
          <MessageOption />
        </div>
      </div>
    </div>
  );
}

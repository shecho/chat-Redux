import React from "react";
import "./MessageItem.css";
import MessageOption from "../messageOption/MessajeOption.jsx";


const rowMessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
};
export default function Message(props) {

  return (
    <div className ='message'>
      <div className="bubble-container"  >
        <div className="bubble" style={rowMessageStyles}>
          <p>{props.index}</p>
          <p> {props.mensaje}</p>
          <p>{props.fecha}  </p>
          <MessageOption />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./MessageItem.css";
import MessageOption from "../messageOption/MessajeOption.jsx"
// import moment from "moment";

export default function Message() {
  return (
    <div>
      <h6>Hora aqui</h6>
      <div className="bubble-container">
        <div className="bubble">Mensaje</div>
        <div>
            <MessageOption/>
        </div>
      </div>
    </div>
  );
}

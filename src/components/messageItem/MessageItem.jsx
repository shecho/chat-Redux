import React from "react";
import "./MessageItem.css";
import MessageOption from "../messageOption/MessajeOption.jsx";
import moment from "moment";

const rowMessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const messagesStyles = (props) => {
   
  }
const dateStyles = { color: "rgba(50,50,50,.4)", };
export default function Message(props) {
  let fechaMoment = moment(props.fecha).fromNow();
  return (
    <div className={[
      'message',
      `${props.sender === 'mine'? 'mine' : ""}`
      ].join(" ")}>
      <div className="bubble-container">
        <div className="bubble" style={rowMessageStyles}>
          <p> {props.mensaje}</p>
          <p style={dateStyles}> {fechaMoment}</p>

          <MessageOption  index={props.index}/>
        </div>
      </div>
    </div>
  );
}

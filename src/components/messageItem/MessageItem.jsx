import React from "react";
import "./MessageItem.css";
import MessageOption from "../messageOption/MessajeOption.jsx";
import moment from "moment";

const rowMessageStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};
export default function Message(props) {
  let fechaMoment = moment(props.fecha).fromNow();
  return (
    <div className="message">
      <div className="bubble-container">
        <div className="bubble" style={rowMessageStyles}>
          <p>{props.index}</p>
          <p> {props.mensaje}</p>
          <p> {fechaMoment}</p>

          <MessageOption />
        </div>
      </div>
    </div>
  );
}

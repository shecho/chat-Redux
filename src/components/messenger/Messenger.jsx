import React from "react";
import ConversationList from "../comversationList/ComversationList.jsx";
import MessageContainer from "../messageContainer/MessageContainer.jsx";
import "./Messenger.css";

export default function Messenger() {
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageContainer />
      </div>
    </div>
  );
}

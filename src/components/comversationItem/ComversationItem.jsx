import React from "react";

import "./ComversationItem.css";

export default function ConversationListItem(props) {
  return (
    <div className="conversation-list-item">
      <img
        className="conversation-photo"
        src="https://thumbs.dreamstime.com/z/user-sign-icon-person-symbol-human-avatar-rich-man-84519083.jpg"
        alt="conversation"
      />
      <div className="conversation-info">
        <h1 className="conversation-title">Person</h1>
        <p className="conversation-snippet">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          dolorum.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import Toolbar from "../toolbar/Toolbar.jsx";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import MessageArea from "../messageArea/MessageArea.jsx";

export default function MessageContainer() {
  return (
    <div className="message-list">
      <Toolbar
        title="Esta es una comversacion"
        rightItems={[
          <ToolbarButton
            key="info"
            icon="ion-ios-information-circle-outline"
          />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />,
        ]}
      />
      <div style={{ padding: "20px" }}>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
        <h1>Mensaje</h1>
      </div>
      <MessageArea />
    </div>
  );
}

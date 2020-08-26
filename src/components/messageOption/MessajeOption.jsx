import React from "react";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";

const messageButtonStyles = {
  display: "flex",
  justifyContent:'flex-end'

}

export default function MessageOption(props) {
  return (
    <div className="" style={messageButtonStyles}>
      <ToolbarButton key="photo" icon="ion-ios-trash" />
      <ToolbarButton key="image" icon="ion-ios-copy" />
      <ToolbarButton key="audio" icon="ion-ios-share-alt" />
      <ToolbarButton key="money" icon="ion-ios-star" />
    </div>
  );
}


import React from "react";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx"



export default function MessageOption (props) {
  return (
    <div className="">
          <ToolbarButton key="photo" icon="ios-trash-outline " />
          <ToolbarButton key="image" icon="ios-copy-outline" />
          <ToolbarButton key="audio" icon="ios-share-alt" />
          <ToolbarButton key="money" icon="ios-star-outline" />
     </div>
  );
}

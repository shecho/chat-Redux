import React from "react";
import Toolbar from "../toolbar/Toolbar.jsx";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import ConversationSearch from "../comversationSearch/ComversationSeacrh";
import "./ComversationList.css";
import ComversationItem from "../comversationItem/ComversationItem.jsx";
export default function ConversationList() {
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      <ComversationItem />
      <ComversationItem />
      <ComversationItem />
      <ComversationItem />
      <ComversationItem />
    </div>
  );
}

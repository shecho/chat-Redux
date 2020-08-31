import React from "react";
import Toolbar from "../toolbar/Toolbar.jsx";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import MessageArea from "../messageArea/MessageArea.jsx";
import MessageItem from "../messageItem/MessageItem.jsx";
import { connect } from 'react-redux'


function MessageContainer(props) {
  let {messagesList} =  props
  // console.log(messagesList);
  return (
    <div className="message-list">
      <Toolbar
        title="Esta es una conversación"
        rightItems={[
          <ToolbarButton
            key="info"
            icon="ion-ios-information-circle-outline"
          />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />,
        ]}
      />
      <div style={{ paddingLeft: "20px" }}>
        {messagesList.map((mensaje,index) =>(
        <MessageItem key={index} index={index} mensaje={mensaje.content} fecha={mensaje.date} sender={mensaje.name}/>
        ))}
      </div>
      <MessageArea />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    messagesList: state.messages,
  };
};
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

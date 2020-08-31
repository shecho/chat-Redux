import React from "react";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import { connect } from "react-redux";

const messageButtonStyles = {
  display: "flex",
  justifyContent: "flex-end",
};
const buttonStyles ={
  border:'none',
  margin: '5px'
}

function MessageOption(props) {
  let { borrarMensaje } = props;

  return (
    <div className="" style={messageButtonStyles}>
      <button style={buttonStyles} onClick={()=>borrarMensaje(props.index)}>
      <ToolbarButton
        key="photo"
        icon="ion-ios-trash"
      />
      </button>
      <ToolbarButton key="image" icon="ion-ios-copy" />
      <ToolbarButton key="audio" icon="ion-ios-share-alt" />
      <ToolbarButton key="money" icon="ion-ios-star" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mensajeAnterior: state.inputMessage,
  };
};
const mapDispatchToProps = (dispatch) => ({
  borrarMensaje(index) {
    dispatch({
      type: "DELETE",
      payload: index,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageOption);

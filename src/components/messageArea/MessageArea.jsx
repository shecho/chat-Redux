import React from "react";
import "./MessageArea.css";
import ToolbarButton from "../toolbarButton/ToolbarButton.jsx";
import { connect } from "react-redux";

const buttonStyle = {
  border: "none",
  display: "flex",
  backgroundColor: "white",
  marginLeft: "10px",
};
function MessageArea(props) {
  const { mensajeAnterior } = props;
  console.log(mensajeAnterior);
  const { agregarChat } = props;
  const { capturarDatos } = props;
  return (
    <div className="compose">
      <input
        onChange={(e) => capturarDatos(e)}
        type="text"
        className="compose-input"
        placeholder="Escibe un mensaje"
      />
      <button style={buttonStyle} onClick={() => agregarChat(mensajeAnterior)}>
        <ToolbarButton key="send" icon="ion-md-send" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mensajeAnterior: state.inputMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  capturarDatos(e) {
    dispatch({
      type: "SET_INPUT_VALUE",
      payload: e,
    });
  },

  agregarChat(mensajeAnterior) {
    dispatch({
      type: "SEND",
      payload: mensajeAnterior,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);

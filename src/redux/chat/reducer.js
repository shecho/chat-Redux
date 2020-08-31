//  Messaje structure
/* {
  content:"mensaje",
  date: "fecha x",
  showOptions: false,
  name:mine
  }
*/

const INITIAL_STATE = {
  messages: [
    {
      content: "Mensaje 1",
      date: "Sun Aug 30 2020 02:06:00 GMT-0500",
      showOptions: false,
      name: "",
    },
    {
      content: "Mensaje 2",
      date: "Sun Aug 31 2020 02:16:00 GMT-0500",
      showOptions: false,
    },
  ],

  inputMessage: "",
};

export const chatReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND":
      let nuevoMensaje = {
        name: "me",
        date: new Date(),
        showOptions: false,
        content: action.payload,
      };
      return {
        ...previousState,
        messages: [...previousState.messages, nuevoMensaje],
      };
    case "DELETE":
      let messages = [...previousState.messages];
      messages.splice(action.payload, 1);
      return { ...previousState, messages: messages };

    case "SET_INPUT_VALUE":
      previousState = {
        ...previousState,
        inputMessage: action.payload.target.value,
      };
      return previousState;

    case "SHOW_OPTIONS":
      return (previousState.messages[action.index].showOptions = !previousState
        .messages[action.index].showOptions.messages[action.index]);

    default:
      return previousState;
  }
};

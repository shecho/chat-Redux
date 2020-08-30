//  Messaje structure
/* {
  content:"mensaje",
  date: "fecha x",
  showOptions: false
  }
*/

const INITIAL_STATE = {
  messages: [
    {
      content: "Mensaje 1",
      date: "fecha x",
      showOptions: false,
      name: "",
    },
    {
      content: "Mensaje 2",
      date: "fecha xx",
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
      return console.log(nuevoMensaje);

    case "DELETE":
      let messagesList = previousState.messages.filter(
        (message) => (message.content = !action.message)
      );
      return messagesList;

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

// estructura de los mensajes
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
      return console.log("enviando");

    case "DELETE":
      return console.log("borrando");

    case "SET_INPUT_VALUE":
      return console.log("mostrando los datos capturados");

    case "SHOW_OPTIONS":
      return console.log("mostrando los datos capturados");

    default:
      return previousState;
  }
};

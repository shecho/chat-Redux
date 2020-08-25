export const sendMessage = (id) => ({
  type: "SEND",
});

export const deleteMessage = (id) => ({
  type: "DELETE",
  payload: id,
});

export const setInputValue = (id) => ({
  type: "SET_INPUT_VALUE",
  payload: id,
});

export const showOptions = (id) => ({
  type: "SHOW_OPTIONS",
  payload: id,
});

let counter = 0

export const addItem = text => {
  return {
    type: "ADD_ITEM",
    counter: counter++,
    items: [],
    text,
  }
}

export const removeItem = text => {
  return {
    type: "REMOVE_ITEM",
    counter: counter--,
    text: "",
  }
}

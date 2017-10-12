export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

// action sends new item to store
export const addItem = text => {
  return {
    type: ADD_ITEM,
    text,
  }
}

// removes item
export const removeItem = text => {
  return {
    type: REMOVE_ITEM,
    text,
  }
}

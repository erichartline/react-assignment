export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const addItem = text => {
  return {
    type: ADD_ITEM,
    text,
  }
}

export const removeItem = text => {
  return {
    type: REMOVE_ITEM,
    text,
  }
}

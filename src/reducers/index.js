const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          counter: action.counter,
          text: action.text,
          items: [],
        },
      ]
    case "REMOVE_ITEM":
      return [
        ...state,
        {
          counter: action.counter,
          text: "",
          items: [],
        },
      ]
    default:
      return state
  }
}
export default rootReducer

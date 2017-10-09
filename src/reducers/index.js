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
          items: action.items.filter(item => action.payload !== item),
        },
      ]
    default:
      return state
  }
}
export default rootReducer

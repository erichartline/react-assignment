import { ADD_ITEM, REMOVE_ITEM } from "../actions"

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          counter: action.counter,
          text: action.text,
        },
      ]
    case REMOVE_ITEM:
      return [
        ...state,
        {
          counter: action.counter,
          items: [
            ...state.slice(0, action.text),
            ...state.slice(action.text + 1),
          ],
          // action.items.filter(item => action.payload !== item)
        },
      ]
    default:
      return state
  }
}
export default rootReducer

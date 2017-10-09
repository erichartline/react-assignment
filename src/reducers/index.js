import { ADD_ITEM, REMOVE_ITEM } from "../actions"

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          counter: action.payload.counter,
          text: action.payload.text,
        },
      ]
    case REMOVE_ITEM:
      return [
        ...state,
        {
          counter: action.payload.counter,
          items: [
            ...state.slice(0, action.payload.text),
            ...state.slice(action.payload.text + 1),
          ],
          // action.items.filter(item => action.payload !== item)
        },
      ]
    default:
      return state
  }
}
export default rootReducer

import { ADD_ITEM, REMOVE_ITEM } from "../actions"

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            text: action.text,
          },
        ],
        counter: state.counter + 1,
      })
    case REMOVE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item !== action.text
        }),
        counter: state.counter - 1,
      })
    default:
      return state
  }
}
export default rootReducer

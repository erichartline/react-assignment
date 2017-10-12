import { ADD_ITEM, REMOVE_ITEM } from "../actions"

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // return a cloned object with current state and add in the new content
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
      // return a cloned object with the current state and a filtered array
      // of the current item list (minus the removed item)
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item !== action.text
        }),
        counter: state.counter - 1,
      })
    // if no changes, just return the state
    default:
      return state
  }
}
export default rootReducer

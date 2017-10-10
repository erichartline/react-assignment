import { ADD_ITEM, REMOVE_ITEM } from "../actions"

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // return Object.assign({}, state, {
      //   items: [...state.items, {
      //     text: action.text,
      //     counter: action.counter
      //   }]
      // })
      return [
        ...state,
        {
          counter: action.counter,
          text: action.text,
        },
      ]
    case REMOVE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter(item => {
          return item !== action.item
        }),
      })

    // [
    //   ...state,
    //   {
    //     counter: action.counter,
    //     text: [
    //       ...state.slice(0, action.text),
    //       ...state.slice(action.text + 1),
    //     ],
    //     // action.items.filter(item => action.payload !== item)
    //   },
    // ]
    default:
      return state
  }
}
export default rootReducer

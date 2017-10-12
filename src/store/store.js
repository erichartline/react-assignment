import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "../reducers"

const middleware = applyMiddleware(createLogger())

// set up the store with an initial state, rootReducer, logger middleware and redux devtools
export default function configureStore(initialState = { items: [] }) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware,
  )
}

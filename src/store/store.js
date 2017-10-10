import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const middleware = applyMiddleware(thunk, createLogger())

export default function configureStore(initialState = { items: [] }) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware,
  )
}

// export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

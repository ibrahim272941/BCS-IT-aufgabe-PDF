import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../mainredux/sagas";
let store;
const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare, thunk];
// if (process.env.NODE_ENV === "development") {

// } else {
//   store = createStore(rootReducer, applyMiddleware(...middleWares));
// }
store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleWare.run(rootSaga);
export default store;

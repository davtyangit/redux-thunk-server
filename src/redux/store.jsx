import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const sagaMiddleWare = [thunk];

const store = createStore(rootReducer, applyMiddleware(...sagaMiddleWare));
export default store;

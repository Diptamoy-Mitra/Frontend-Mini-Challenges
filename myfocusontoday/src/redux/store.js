import { createStore } from "redux";
import todoReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-Extension'
const store=createStore(todoReducer, composeWithDevTools())

export default store; 
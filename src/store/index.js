/* import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import ToDo from "./ToDo";

const store = createStore(ToDo, applyMiddleware(thunkMiddleware));

export default store; */

import { createStore } from "redux";
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;

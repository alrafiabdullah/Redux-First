import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const indexReducer = combineReducers({
    count: counterReducer,
    isLogged: loggedReducer
});

export default indexReducer;
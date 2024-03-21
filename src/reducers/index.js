import { counterReducer } from "./counterReducer";
import { toggleReducer } from "./toggleReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    // counterReducer:counterReducer,
    // toggleReducer:toggleReducer 
    counterReducer,  // ES6 syntax for same key:value pair
    toggleReducer
});

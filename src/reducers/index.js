import { combineReducers } from "redux";
// reducers
import navIsShowing from "./navIsShowing";

const allReducers = combineReducers({
    showNav: navIsShowing
})

export default allReducers
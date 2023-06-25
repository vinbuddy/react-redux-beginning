import { combineReducers } from "redux";
import todoReducer from "../components/Todo/todoSlice";

const rootReducer = combineReducers({
    todo: todoReducer,
});
export default rootReducer;

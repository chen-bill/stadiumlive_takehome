import { combineReducers } from "redux";
import avatarReducer from "./avatar/reducer";

export default combineReducers({
  avatar: avatarReducer
});


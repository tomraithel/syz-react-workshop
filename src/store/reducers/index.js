import { combineReducers } from "redux";

import counter from "./counter";
import chat from "./chat";

export default combineReducers({ counter, chat });

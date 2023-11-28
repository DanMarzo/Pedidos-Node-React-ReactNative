import { combineReducers } from "redux";
import { authPersisted } from "../infra/config-redux/redux-persist";

export default combineReducers({
    auth: authPersisted
})
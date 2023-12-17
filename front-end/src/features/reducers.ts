import { combineReducers } from "redux";
import { authPersisted } from "../infra/config-redux/redux-persist";
import { dashboardReducer } from "./dashboard/dashboard.state";

export default combineReducers({
    auth: authPersisted,
    dashboard: dashboardReducer
})
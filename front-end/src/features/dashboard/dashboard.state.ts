import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateDashboard } from "./dashboard.schema";

const dashboard = createSlice({
    name: "auth",
    initialState: initialStateDashboard,
    reducers: {
        setOrderId(state, action: PayloadAction<string | undefined>) {
            state.orderId = action.payload;
        }
    }
})

export const { actions: dashboardAction, reducer: dashboardReducer } = dashboard
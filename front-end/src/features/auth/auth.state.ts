import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialStateAuth, {  UserPropsResponse } from "./auth.schema";

const auth = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    reducers: {
        setUserProps(state, action: PayloadAction<UserPropsResponse>){
            state.userProps = action.payload
        }
    }
})

export const { actions: authAction, reducer: authReducer } = auth
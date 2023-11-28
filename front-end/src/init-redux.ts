import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/reducers"


export default () => {

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            });
        }
    });
    return store;
}
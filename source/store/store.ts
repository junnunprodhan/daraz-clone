import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import {reducers} from "./reducer";
import storage from "./storage";

// Persist
const persistedReducer = persistReducer(
    {
        key: "root",
        storage,
    },
    reducers
);
// Export Global Reducers
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

// Persisted Store
export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
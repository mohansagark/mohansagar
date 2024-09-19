import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slice/generalSlice";

const rootReducer = combineReducers({
  general: generalReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../reducer/counterReducer";

export const store = configureStore({
  reducer: {
    appReducer,
  },
});

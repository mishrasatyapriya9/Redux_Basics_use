import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/count";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

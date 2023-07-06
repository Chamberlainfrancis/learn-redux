import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
});

/**
 * how to use Redux Persist to save the state
 * in persistent storage so that even after a refresh,
 * the data will still remain intact.
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/TodoSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,

  /**
   * Customize what’s persisted to the storage.
   * The blacklist and whitelist properties take an array of strings.
   * Each string must match a part of the state that is managed by
   * the reducer we pass to persistReducer.
   */

  // whitelist: ["counter"], // only counter will be persisted
  // blacklist: ["todo"], // only todo will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//     counter: counterReducer,
//   },
// });

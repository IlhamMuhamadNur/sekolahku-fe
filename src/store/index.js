import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
const persister = persistStore(store);

export { store, persister };

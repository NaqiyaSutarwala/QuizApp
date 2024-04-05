import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "./Slices/QuizSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, QuizSlice);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: composeWithDevTools,
});

export const persistor = persistStore(store);

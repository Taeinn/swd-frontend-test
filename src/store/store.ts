import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: { language: languageReducer, form: formReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

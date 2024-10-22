import { configureStore } from "@reduxjs/toolkit";
import contactAlertReducer from "../features/contactAlertBox/ContactAlertSlice";

export const store = configureStore({
  reducer: {
    contactAlertControll: contactAlertReducer,
  },
});

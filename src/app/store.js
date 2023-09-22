import { configureStore } from "@reduxjs/toolkit";
import  gitUser  from "../features/gitUsersSlice";

export const store = configureStore({
  reducer: {
    app:gitUser
  },
});
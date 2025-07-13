import { configureStore } from "@reduxjs/toolkit";
import authUser from "./features/auth/authUserSlice";

export const store = configureStore({
  reducer: {
    authUser: authUser,
  },
});

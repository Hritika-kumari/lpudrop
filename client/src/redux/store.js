import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

// Configure Redux store with auth reducer
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;

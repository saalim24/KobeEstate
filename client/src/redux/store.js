import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // Import the userSlice

export const store = configureStore({
  reducer: { user: userReducer }, // Use userSlice.reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

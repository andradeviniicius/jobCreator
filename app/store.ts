import { configureStore } from "@reduxjs/toolkit";
import jobDescriptionSlice from "../features/jobDescriptionSlice";
// ...

export const store = configureStore({
  reducer: {
    jobData: jobDescriptionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import familiesSlice from "../features/families/familiesSlice";
import singleFamilySlice from "../features/families/singleFamilySlice";
const store = configureStore({
  reducer: {
    families: familiesSlice,
    family: singleFamilySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;

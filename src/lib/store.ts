import { configureStore } from "@reduxjs/toolkit";
import carshopSlice from "./features/carshop/carshopSlice";
// import logger from "redux-logger";

export default function makeStore() {
  return configureStore({
    reducer: {
      carshop: carshopSlice,
    },
    middleware: (getDefaultMiddleware) => {
     return getDefaultMiddleware({
        serializableCheck: false,
      }) //.concat(logger);
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

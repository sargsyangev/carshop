import { configureStore } from "@reduxjs/toolkit";
import carshopSlice from "./features/carshop/carshopSlice";

export default function makeStore() {
  return configureStore({
    reducer: {
      carshop: carshopSlice
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

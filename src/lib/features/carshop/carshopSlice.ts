import { RootState } from "@/lib/store";
import { car } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCars, getRecommendCars, getSingleCar } from "./carshopAPI";

interface carshopState {
  allCars: {
    entities: car[] | undefined;
    loading: boolean;
    error: string;
  };
  recommendCars: {
    entities: car[] | undefined;
    loading: boolean;
    error: string;
  };
  singleCar: {
    car: car | null;
    loading: boolean;
    error: string;
  };
}
const initialState: carshopState = {
  allCars: {
    entities: [],
    loading: false,
    error: "",
  },
  recommendCars: {
    entities: [],
    loading: false,
    error: "",
  },
  singleCar: {
    car: null,
    loading: false,
    error: "",
  },
};

export const carshopSlice = createSlice({
  name: "carshop",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.allCars.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.allCars.entities = action.payload;
        return state;
      });
    builder
      .addCase(getRecommendCars.pending, (state) => {
        state.recommendCars.loading = true;
      })
      .addCase(getRecommendCars.fulfilled, (state, action) => {
        state.recommendCars.loading = false;
        state.recommendCars.entities = action.payload;
        return state;
      });
    builder
      .addCase(getSingleCar.pending, (state) => {
        state.singleCar.loading = true;
      })
      .addCase(getSingleCar.fulfilled, (state, action) => {
        state.singleCar.loading = false;
        state.singleCar.car = action.payload || null;
        return state;
      });
  },
});

export const {} = carshopSlice.actions;
export const selectAllCars = (state: RootState) => state.carshop.allCars;
export const selectRecommendCars = (state: RootState) =>state.carshop.recommendCars;
export const selectSingleCar = (state: RootState) => state.carshop.singleCar;
export default carshopSlice.reducer;

import { RootState } from "@/lib/store";
import { car } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCars, getCars } from "./carshopAPI";

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
};

export const carshopSlice = createSlice({
  name: "carshop",
  initialState,
  reducers: {
    // setCars:(state,action:PayloadAction<car[]>)=>{

    // }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.allCars.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.allCars.entities = action.payload;
        return state;
      })
    builder
      .addCase(getCars.pending, (state) => {
        state.recommendCars.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.recommendCars.loading = false;
        state.recommendCars.entities = action.payload;
        return state;
      });
  },
});

export const {} = carshopSlice.actions;
export const selectAllCars = (state: RootState) => state.carshop.allCars;
export const selectRecommendCars = (state: RootState) => state.carshop.recommendCars;

export default carshopSlice.reducer;

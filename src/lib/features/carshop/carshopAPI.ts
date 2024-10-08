import { car } from "@/lib/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:4000/cars";

export const getAllCars = createAsyncThunk("carshop/getAllCars", async () => {
  try {
    const response = await fetch(URL)
      .then((res) => res.json())
      .then((res) => res);
    return response as car[];
  } catch (err) {
    console.log("fetching data error:", err);
  }
});

export const getRecommendCars = createAsyncThunk(
  "carshop/getRecommendCars",
  async (limit: number) => {
    try {
      const response = await fetch(URL + `?_start=0&_limit=${limit}`)
        .then((res) => res.json())
        .then((res) => res);
      return response as car[];
    } catch (err) {
      console.log("fetching data error:", err);
    }
  }
);
export const getSingleCar = createAsyncThunk(
  "carshop/getSingleCar",
  async (id: string) => {
    try {
      const response = await fetch(URL + `/${id}`)
        .then((res) => res.json())
        .then((res) => res);
      return response as car;
    } catch (err) {
      console.log("fetching data error:", err);
    }
  }
);

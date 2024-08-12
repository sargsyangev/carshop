"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { Button } from "@mui/material";
import ByMarkFilterSection from "./_components/byMarkFilter";
import ByTypeFilterSection from "./_components/byTypeFilter";
import Recommendations from "./_components/recommendations";
import { selectAllCars } from "@/lib/features/carshop/carshopSlice";
import { getAllCars } from "@/lib/features/carshop/carshopAPI";

export default function Home() {
  const allCars = useAppSelector(selectAllCars);
  const dispatch = useAppDispatch();
  const { entities, loading } = allCars;
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <ByMarkFilterSection />
      <ByTypeFilterSection />
      <Button
        variant="contained"
        sx={{ width: "280px", height: "40px", marginTop: "56px" }}
      >
        All {entities?.length || " "} offers
      </Button>
      <Recommendations />
    </section>
  );
}

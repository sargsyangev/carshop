"use client";
import { getRecommendCars } from "@/lib/features/carshop/carshopAPI";
import { selectRecommendCars } from "@/lib/features/carshop/carshopSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useInView } from "react-intersection-observer";
import CarCard from "./carCard/carCard";

function Recommendations() {
  const recommendCars = useAppSelector(selectRecommendCars);
  const dispatch = useAppDispatch();
  const { entities, loading } = recommendCars;
  const [limit, setLimit] = useState<number>(20);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    dispatch(getRecommendCars(limit));
  },[]);

  useEffect(() => {
    if (inView) {
      setLimit((prev) => prev + 20);
    }
  }, [inView]);

  useEffect(() => {
    dispatch(getRecommendCars(limit));
  }, [limit]);

  return (
    <section className=" w-full h-auto mt-16">
      <p className="text-3xl text-txtBaseColor font-semibold border-b border-b-black dark:border-b-gray-300">
        Recommendations
      </p>
      <div className="w-full h-auto mt-6 flex flex-wrap gap-y-5 justify-between">
        {entities?.map((car, index) => {
          return (
            <CarCard
              key={car.id}
              car={car}
              ref={index === entities.length - 1 ? ref : null}
            />
          );
        })}
      </div>
      {loading && (
        <div className="w-full h-4 flex justify-center items-center mt-4">
          <CircularProgress />
        </div>
      )}
    </section>
  );
}

export default Recommendations;

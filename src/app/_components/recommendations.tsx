"use client";
import { getCars } from "@/lib/features/carshop/carshopAPI";
import { selectRecommendCars } from "@/lib/features/carshop/carshopSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useInView } from "react-intersection-observer";

function Recommendations() {
  const recommendCars = useAppSelector(selectRecommendCars);
  const dispatch = useAppDispatch();
  const { entities, loading } = recommendCars;
  const [limit, setLimit] = useState<number>(20);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    setLimit((prev) => prev + 20);
    dispatch(getCars(limit));
  }, [inView]);

  return (
    <section className=" w-full h-auto mt-7">
      <p className="text-3xl font-semibold border-b border-b-black">
        Recommendations
      </p>
      <div className="w-full h-auto mt-6 grid grid-cols-4 gap-5">
        {entities?.map((car, index) => {
          if (index === entities.length - 1) {
            return (
              <div className="w-64 h-96 bg-slate-400" key={car.id} ref={ref}>
                {car.body_type}
              </div>
            );
          }
          return (
            <div className="w-72 h-96 bg-slate-400" key={car.id}>
              {car.body_type}
            </div>
          );
        })}
        {loading && <CircularProgress />}
      </div>
    </section>
  );
}

export default Recommendations;

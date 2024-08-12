"use client";
import { getSingleCar } from "@/lib/features/carshop/carshopAPI";
import { selectSingleCar } from "@/lib/features/carshop/carshopSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ImageSection from "./imageSection";
import DescriptionSection from "./descriptionSection";
import ContactSection from "./contactSection";
import TitleSection from "./titleSection";

function SingleCarPage({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { car } = useAppSelector(selectSingleCar);
  const { id } = params;

  useEffect(() => {
    dispatch(getSingleCar(id));
  }, [dispatch, id]);

  return (
    <section className="w-full h-full bg-bgBaseColor">
      <div className="w-full h-20 max-md:h-28">
        <TitleSection car={car} />
      </div>
      <div className="w-full h-full flex max-lg:flex-col">
        <div className="w-1/2 h-full max-lg:w-full">
          <ImageSection img={car?.img} />
        </div>
        <div className="w-1/3 h-auto max-lg:w-full">
          <DescriptionSection car={car} />
        </div>
      </div>
      <div className="w-1/2 h-40 bg-gray-100 dark:bg-neutral-900 rounded-md max-lg:w-full">
        <ContactSection />
      </div>
    </section>
  );
}

export default SingleCarPage;

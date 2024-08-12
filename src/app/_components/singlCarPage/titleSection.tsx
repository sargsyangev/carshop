import { car } from "@/lib/types";
import React from "react";

function TitleSection({ car }: { car: car | null }) {
  return (
    <section className="w-full h-full flex flex-col p-2">
      <div className="w-full h-1/2 flex justify-between text-txtBaseColor text-3xl font-medium max-md:flex-col max-md:text-2xl">
        <p>
          {car?.brand} {car?.model}
          {", "}
          {car?.year}
        </p>
        <p className="max-md:mt-1">
          {car?.price}
          {" $"}
        </p>
      </div>
      <div className="w-full h-1/2 text-blue-500 mt-2 max-md:mt-5">
        <p>
          {car?.country}
          <span className="text-gray-300">{" | "}</span>
          {car?.customs_cleared ? (
            <span className="text-green-500">Custom cleared</span>
          ) : (
            <span className="text-red-500">Custom not cleared</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default TitleSection;

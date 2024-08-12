import { car } from "@/lib/types";
import React from "react";
import DescriptionItem from "./descriptionItem";

function DescriptionSection({ car }: { car: car | null }) {
  return (
    <section className="p-3 ml-3 w-full h-full flex flex-col gap-y-2">
      <DescriptionItem
        title="Mileage"
        value={car?.mileage.toString() || null}
        sign="km"
      />
      <DescriptionItem
        title="Body Type"
        value={car?.body_type.toString() || null}
      />
      <DescriptionItem title="Engine" value={car?.engine || null} />
      <DescriptionItem title="Gearbox" value={car?.transmission || null} />
      <DescriptionItem title="Hand Drive" value={car?.steering || null} />
      <DescriptionItem title="Color" value={car?.color || null} />
      <DescriptionItem
        title="Engine Volume"
        value={car?.engineVolume || null}
      />
      <DescriptionItem
        title="Horsepower"
        value={car?.power.toString() || null}
        sign="hp"
      />
      <div className="w-full h-52 mt-4">
        <p className="w-full text-gray-500 text-xl border-b border-b-gray-300 overflow-hidden">
          Additional
        </p>

        {car?.description ? car?.description : <p className=" text-txtBaseColor text-lg p-3">Sorry no more additional information</p>}
      </div>
    </section>
  );
}

export default DescriptionSection;

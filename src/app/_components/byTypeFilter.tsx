import React from "react";
import Convertible from "../../../public/cars_type_logo/convertible.png";
import Coupe from "../../../public/cars_type_logo/coupe.png";
import Hatchback from "../../../public/cars_type_logo/hatchback.png";
import Minivan from "../../../public/cars_type_logo/minivan.png";
import Pickup from "../../../public/cars_type_logo/pickup.png";
import Sedan from "../../../public/cars_type_logo/sedan.png";
import Suv from "../../../public/cars_type_logo/suv.png";
import Van from "../../../public/cars_type_logo/van.png";
import Image from "next/image";

function ByTypeFilterSection() {
  const carsType = [
    { name: "Convertible", src: Convertible },
    { name: "Coupe", src: Coupe },
    { name: "Hatchback", src: Hatchback },
    { name: "Minivan", src: Minivan },
    { name: "Pickup", src: Pickup },
    { name: "Sedan", src: Sedan },
    { name: "Suv", src: Suv },
    { name: "Van", src: Van },
  ];
  return (
    <section className=" w-1/2 h-36 grid grid-cols-4 gap-3 mt-14 border-b border-b-gray-300 max-lg:grid-cols-3 max-md:grid-cols-2  max-lg:w-2/3 max-lg:h-80">
      {carsType.map(({ src, name }, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:opacity-50 "
          >
            <div className="w-3/4 h-5/6 relative ">
              <Image
                src={src}
                alt={name}
                fill
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                  // mixBlendMode: "multiply",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-txtBaseColor">{name}</p>
          </div>
        );
      })}
    </section>
  );
}
export default ByTypeFilterSection;

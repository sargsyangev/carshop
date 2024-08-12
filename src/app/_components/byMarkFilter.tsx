import React from "react";
import Audi from "../../../public/cars_logo/Audi.png";
import BMW from "../../../public/cars_logo/BMW.png";
import Chevrolet from "../../../public/cars_logo/Chevrolet.png";
import Ford from "../../../public/cars_logo/Ford.png";
import Tesla from "../../../public/cars_logo/Tesla.png";
import Hyundai from "../../../public/cars_logo/Hyundai.png";
import MercedesBenz from "../../../public/cars_logo/MercedesBenz.png";
import Nissan from "../../../public/cars_logo/Nissan.png";
import Toyota from "../../../public/cars_logo/Toyota.png";
import Volkswagen from "../../../public/cars_logo/Volkswagen.png";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

function ByMarkFilterSection() {
  const carsLogo = [
    { name: "Mercedes-Benz", src: MercedesBenz },
    { name: "BMW", src: BMW },
    { name: "Chevrolet", src: Chevrolet },
    { name: "Tesla", src: Tesla },
    { name: "Audi", src: Audi },
    { name: "Ford", src: Ford },
    { name: "Hyundai", src: Hyundai },
    { name: "Nissan", src: Nissan },
    { name: "Toyota", src: Toyota },
    { name: "Volkswagen", src: Volkswagen },
  ];
  return (
    <section className="w-2/3 h-auto flex justify-between items-center border-b border-b-gray-300 max-lg:flex-wrap max-lg:justify-center">
      {carsLogo.map((logo, index) => {
        return (
          <Link
            key={index}
            className="w-[75px] h-16 relative bg-transparent hover:opacity-50"
            href={`/cars/${logo.name.toLowerCase()}/all`}
          >
            <Tooltip
              title={logo.name}
              arrow
              TransitionProps={{ timeout: 700 }}
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -8],
                      },
                    },
                  ],
                },
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  //  mixBlendMode: "multiply",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Tooltip>
          </Link>
        );
      })}
    </section>
  );
}
export default ByMarkFilterSection;

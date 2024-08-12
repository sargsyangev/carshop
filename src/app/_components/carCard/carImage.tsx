import React from "react";
import Image from "next/image";

function CarImage({ imgSrc }: { imgSrc: string }) {
  return (
    <Image
      src={imgSrc}
      alt="logo"
      fill
      style={{
        objectFit: "cover",
        borderRadius: "16px",
      }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export default CarImage;

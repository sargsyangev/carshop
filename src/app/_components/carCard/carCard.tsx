import { car } from "@/lib/types";
import { forwardRef, RefObject, useState } from "react";
import { Suspense } from "react";
import { modifiPrice } from "@/lib/helperFunctions";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loading from "./loading";

const CarImage = dynamic(() => import("./carImage"), {
  loading: () => <Loading />,
  ssr: false,
});

const CarCard = forwardRef(
  (
    props: { car: car},
    ref: RefObject<any> | ((node?: Element | null | undefined) => void) | null
  ) => {
    const { brand, price, img, model, year, id } = props.car;

    const [imgSrc, setImgSrc] = useState<string>(img[0]?.imgUrl);
    const handleOnMouseEnter: () => void = () => setImgSrc(img[1]?.imgUrl);
    const handleOnMouseLeave: () => void = () => setImgSrc(img[0]?.imgUrl);
    const modifiedPrice = modifiPrice(price);

    return (
      <Link
        href={`/cars/${id}`}
        className="w-72 h-80 rounded-2xl flex flex-col max-md:w-full max-md:h-96"
        ref={ref}
      >
        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          className="w-full relative rounded-2xl h-60 cursor-pointer max-md:h-80"
        >
          <Suspense>
            <CarImage imgSrc={imgSrc}/>
          </Suspense>
        </div>
        <p className="text-xl font-medium  text-gray-800  dark:text-white">
          {modifiedPrice}$
        </p>
        <p className="text-base font-normal text-gray-700  dark:text-slate-50">
          {brand} {model}
        </p>
        <p className="text-base font-normal text-gray-600  dark:text-slate-100">
          {year}
        </p>
      </Link>
    );
  }
);
CarCard.displayName = "CarCard"
export default CarCard;

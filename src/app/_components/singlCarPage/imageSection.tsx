import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { carImg } from "@/lib/types";

function ImageSection({ img }: { img: carImg[] | undefined }) {
  return (
    <CarouselProvider
      infinite
      naturalSlideWidth={600}
      naturalSlideHeight={530}
      totalSlides={img?.length || 2}
    >
      <div className="relative">
        <Slider>
          {img?.map((image, i) => {
            return (
              <Slide key={i} index={i}>
                <Image
                  src={image.imgUrl}
                  alt="car"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className="absolute top-1/2">
          <ArrowBackIcon sx={{ fontSize: "50px", color: "white" }} />
        </ButtonBack>
        <ButtonNext className="absolute  right-0 top-1/2">
          <ArrowForwardIcon sx={{ fontSize: "50px", color: "white" }} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default ImageSection;

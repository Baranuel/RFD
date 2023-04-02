"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyCarousel({ children }: { children: React.ReactNode }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 539, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      pauseOnHover={false}
      partialVisible={false}
      shouldResetAutoplay
      responsive={responsive}
      transitionDuration={100}
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
        "superLargeDesktop",
        "desktop",
      ]}
      containerClass="my-2 sm:my-0  "
      itemClass="m-2 sm:m-1 relative bg-primaryDark  h-[450px] xl:h-[300px] lg:h-[300px] sm:h-[250px]"
    >
      {children}
    </Carousel>
  );
}

export default MyCarousel;

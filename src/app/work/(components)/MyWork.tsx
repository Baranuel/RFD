"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import SectionHeading from "../../../components/SectionHeading";
function MyWork() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <SectionHeading text="My Work" />
      <div className="">
        <Carousel
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          responsive={responsive}
          containerClass="my-2"
          itemClass="m-2 bg-primaryDark "
        >
          <div className="h-[350px]">1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </Carousel>
      </div>
    </section>
  );
}

export default MyWork;

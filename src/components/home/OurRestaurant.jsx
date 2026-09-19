"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Para from "../common/Para";
import Subheading from "../common/Subheading";
import Heading from "../common/Heading";
import Button from "../common/Button";
import { galleryData } from "../Hellper";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black transition-all shrink-0 cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
    </button>
  );
};

function OurRestaurant() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    appendDots: dots => (
      <div style={{ bottom: "-35px" }}>
        <ul className="flex justify-center items-center gap-2 m-0 h-6"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 rounded-full bg-white opacity-50 transition-all slick-custom-dot mt-2"></div>
    )
  };

  return (
    <div className="py-16 bg-[#11171C]">
      <style>{`
        .slick-dots li {
          margin: 0 !important;
          width: auto !important;
          height: auto !important;
        }
        .slick-dots li.slick-active .slick-custom-dot {
          background-color: #FAA93E !important;
          opacity: 1 !important;
          width: 10px;
          height: 10px;
          margin-top: 1px;
        }
      `}</style>
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Text */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-4">
            <Subheading
              subheading="OUR GALLERY"
              className="text-[#FAA93E] md:text-base text-xs font-semibold leading-[144%] tracking-wider uppercase font-inter"
            />
            <Heading
              heading="A Glimpse of Our Restaurant"
              className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold font-inter text-white leading-[144%]"
            />
            <Para
              para="Take a look at our cozy space, delicious food and happy moments"
              className="text-gray-300 font-inter mt-2 md:text-base text-xs leading-[144%]"
            />
            <div className="mt-4">
              <Button
                btn="View All Photos"
                className="border border-[#FAA93E] text-[#FAA93E] md:text-base text-xs lg:px-6 md:px-5 px-4 md:py-3 py-2 rounded-full font-semibold hover:bg-[#FAA93E] hover:text-white transition-all bg-transparent cursor-pointer"
              />
            </div>
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-2/3 relative px-6 md:px-12 pb-10">
            <Slider {...settings}>
              {galleryData().map((item, index) => (
                <div key={item.id} className="px-2">
                  <div className="rounded-xl overflow-hidden aspect-square">
                    <Image
                      src={item.image}
                      alt={`Gallery ${index}`}
                      width={220}
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurRestaurant;

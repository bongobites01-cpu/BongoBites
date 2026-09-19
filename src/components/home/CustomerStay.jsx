import React from "react";
import Image from "next/image";
import Heading from "../common/Heading";
import Subheading from "../common/Subheading";
import Para from "../common/Para";
import { customerData } from "../Hellper";

function CustomerStay() {
  return (
    <div className="py-16 bg-[#F9F6F0]">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:gap-4 md:gap-3 gap-2">
            <Subheading
              subheading="TESTIMONIALS"
              className="text-[#FAA93E] md:text-base text-xs font-semibold leading-[144%] tracking-wider uppercase font-inter"
            />
            <Heading
              heading="What Our Customers Say"
              className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold font-inter text-black leading-[144%]"
            />
            <Para
              para="Real People . Real Experiences . Real Love"
              className="text-gray-600 font-inter mt-2 md:text-base text-xs leading-[144%]"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-2/3">
            <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-6 w-full overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory">
              {customerData().map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 shrink-0 w-[280px] md:w-[320px] lg:w-auto snap-start"
                >
                  {/* Top Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Heading
                        heading={item.name}
                        className="font-bold text-black font-inter text-sm md:text-base"
                      />
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#FAA93E"
                          stroke="#FAA93E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <Para
                          para={item.rating}
                          className="text-[10px] md:text-xs font-bold text-gray-800"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <Para
                    para={item.review}
                    className="text-gray-500 font-inter text-xs md:text-sm leading-[144%]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStay;

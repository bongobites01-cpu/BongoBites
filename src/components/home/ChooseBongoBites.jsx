import Image from "next/image";
import React from "react";
import Para from "../common/Para";
import Subheading from "../common/Subheading";
import { choose } from "../Hellper";

function ChooseBongoBites() {
  return (
    <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5 bg-[#F6EFE6]">
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-12.5 lg:gap-10 md:gap-8 gap-7 items-center xl:py-12.5 lg:py-10 md:py-8 py-6">
        <div className="w-full xl:max-w-[704px]">
          <Image
            className="w-full xl:max-w-[704px] rounded-r-4xl"
            src={"/png/choose.png"}
            alt="choose"
            width={704}
            height={740}
          />
        </div>
        <div className="flex flex-col lg:gap-6 md:gap-5 gap-4 w-full xl:max-w-[510px]">
          <div className="flex  flex-col md:gap-4 gap-3">
            <div className="flex flex-col md:gap-2.5 gap-1.5">
              <Para
                para="Why choose US"
                className="text-[#FAA93E] md:text-base text-xs font-semibold leading-[144%] tracking-wider uppercase font-inter"
              />

              <Subheading
                subheading="Why Choose BongoBites"
                className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold font-inter text-black leading-[144%]"
              />
            </div>
            <Para
              para="We are not just a restaurant, we are a place where foo, friends and happiness come together. our mission is to serve you the best food with exceptional service, every single time."
              className="text-gray-600 font-inter  mt-2 md:text-base text-xs leading-[144%]"
            />
          </div>
          <div className="flex flex-col gap-3">
            {choose().map((item, index) => (
              <div key={index} className="flex gap-2.5 items-center">
                <Image
                  className="w-full max-w-[26px]"
                  src={item.svg}
                  alt="good"
                  width={26}
                  height={26}
                />
                <ul>
                  <li className="text-base font-inter font-medium leading-[144%] text-[#000000B2]">
                    {item.name}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseBongoBites;

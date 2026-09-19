import React from "react";
import { heroli } from "../Hellper";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Button from "../common/Button";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full bg-hero bg-cover bg-center lg:pt-[108px] md:pt-[90px] sm:pt-[80px] pt-[70px] lg:pb-[76px] md:pb-[70px] sm:pb-[66px] pb-[60px]">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="w-full max-w-[515px]">
          <div className="flex flex-col gap-6 w-full">
            <ul className="marker:text-[#FAA93E] list-disc flex lg:gap-6.5 md:gap-5 gap-4">
              {heroli().map((item, index) => (
                <li
                  key={index}
                  className="md:text-base text-xs font-inter font-medium leading-[144%] text-[#FFFFFF]"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex flex-col xl:gap-11 lg:gap-8 md:gap-7 sm:gap-6 gap-5">
              <div className="flex flex-col md:gap-3.5 gap-2">
                <Heading
                  className={
                    "xl:text-[40px] lg:text-4xl md:text-3xl text-2xl text-[#FFFFFF] font-extrabold leading-[144%] font-noto italic"
                  }
                  heading={"Good Food"}
                  className2={
                    "xl:text-[46px] lg:text-[40px] md:text-4xl text-3xl leading-[144%] font-kalam block text-yellow-500"
                  }
                  span={"Brings People Together"}
                />
                <Para
                  className={
                    "lg:text-xl md:text-lg text-base font-inter font-medium leading-[144%] text-[#FFFFFF]"
                  }
                  para={
                    "At Bongobites, we serve delicious meals made with fresh ingredients and a lot of love . Experience the perfect blend of taste, quality and comfort."
                  }
                />
              </div>
              <div className="flex md:gap-5 sm:gap-4 gap-3">
                <Link href="/#our-special-menu">
                  <Button
                    btn={"Order Now"}
                    className={
                      "text-base font-inter font-semibold leading-[100%] text-[#FFFFFF] lg:py-3 md:py-2.5 py-2 lg:px-6 md:px-5 px-4 rounded-4xl bg-transparent border-2 border-amber-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAA93E] hover:text-[#000000]"
                    }
                  />
                </Link>
                <Link href={"/menu/#special-menu"}>
                  <Button
                    btn={"View Menu"}
                    className={
                      "text-base font-inter font-semibold leading-[100%] text-[#FFFFFF] lg:py-3 md:py-2.5 py-2 lg:px-6 md:px-5 px-4 rounded-4xl bg-transparent border-2 border-amber-400 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAA93E] hover:text-[#000000]"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

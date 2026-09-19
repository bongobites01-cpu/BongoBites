import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "../Hellper";
import Heading from "../common/Heading";
import Subheading from "../common/Subheading";
import Para from "../common/Para";
import Button from "../common/Button";

function SpecialMenu() {
  return (
    <div id="our-special-menu" className="py-16 bg-[#F9F6F0]">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:gap-6 gap-10">
          {/* Left Content Area */}
          <div className="w-full  flex flex-col gap-4 w-full xl:max-w-[358px] lg:max-w-[223px]">
            <Subheading
              subheading="POPULAR DISHES"
              className="text-[#FAA93E] md:text-base text-xs font-semibold leading-[144%] tracking-wider uppercase font-inter"
            />
            <Heading
              heading="Our Special Menu"
              className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold font-inter text-black leading-[144%]"
            />
            <Para
              para="Discover our most loved dishes crafted with fresh ingredients and authentic flavours"
              className="text-gray-600 font-inter  mt-2 md:text-base text-xs leading-[144%]"
            />
            <div className="mt-4">
              <Link href="/menu#special-menu">
                <Button
                  btn="View Full Menu"
                  className="border border-[#FAA93E] text-[#FAA93E] md:text-base text-xs lg:px-6 md:px-5 px-4 md:py-3 py-2 rounded-full font-semibold hover:bg-[#FAA93E] hover:text-white transition-all cursor-pointer"
                />
              </Link>
            </div>
          </div>

          <div className="w-full h-auto lg:max-w-[807px] items-center md:justify-center flex xl:gap-9 lg:gap-6 md:gap-5 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 rounded-lg scrollbar-hide">
            {menuData()
              .slice(0, 4)
              .map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-[175px] shrink-0 md:shrink flex flex-col rounded-lg overflow-hidden"
                >
                  <div className="w-full">
                    <Image
                      className="w-full h-auto object-cover"
                      src={item.image}
                      alt="itemsimg"
                      width={170}
                      height={170}
                    />
                  </div>
                  <div className="py-3 px-2.5 bg-[#FFFFFF] flex flex-col gap-2 justify-between">
                    <Para
                      para={item.name}
                      className={
                        "text-xs font-inter font-medium leading-[144%]"
                      }
                    />
                    <div className="flex justify-between">
                      <Para
                        para={item.price}
                        className={
                          "text-[10px] font-inter font-extrabold leading-[144%]"
                        }
                      />
                      <div className="flex gap-2 items-center">
                        <Image
                          className="w-full max-w-[10px]"
                          src={item.svg}
                          alt="star"
                          width={10}
                          height={10}
                        />
                        <Para
                          para={item.rating}
                          className={
                            "text-[8px] font-inter font-medium leading-[144%]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialMenu;

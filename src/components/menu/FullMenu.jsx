"use client";
import React, { useState } from "react";
import Image from "next/image";
import { fullmenu, menuData } from "../Hellper";
import Heading from "../common/Heading";
import Subheading from "../common/Subheading";
import Para from "../common/Para";
import Button from "../common/Button";

function FullMenu() {
  const allItems = fullmenu();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allItems.length / itemsPerPage) || 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentItems = allItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div id="special-menu" className="py-16 bg-[#F9F6F0]">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-col items-center w-full gap-10">
          {/* Top Section */}
          <div className="flex flex-col items-center justify-center text-center gap-2 max-w-[500px]">
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
              className="text-gray-600 font-inter mt-2 md:text-base text-xs leading-[144%]"
            />
          </div>

          {/* Grid Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="w-full bg-[#FFFFFF] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-full h-auto">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={250}
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
                <div className="p-4 flex flex-col gap-3 justify-between flex-grow">
                  <Para
                    para={item.name}
                    className="text-sm font-inter font-medium leading-[144%] text-black"
                  />
                  <div className="flex justify-between items-center mt-auto">
                    <Para
                      para={item.price}
                      className="text-sm font-inter font-extrabold leading-[144%] text-black"
                    />
                    <div className="flex gap-1.5 items-center">
                      <Image
                        className="w-3 h-3"
                        src={item.svg}
                        alt="star"
                        width={12}
                        height={12}
                      />
                      <Para
                        para={item.rating}
                        className="text-[10px] font-inter font-bold leading-[144%] text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex items-center gap-2 mt-8">
            <Button
              onClick={handlePrev}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-all ${currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none"
                : "bg-[#FAA93E] text-white hover:opacity-80"
                }`}
              btn={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              }
            />
            <div className="px-4 py-1.5 bg-white border border-gray-200 text-black text-sm font-medium font-inter rounded">
              {currentPage}/{totalPages}
            </div>
            <Button
              onClick={handleNext}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-all ${currentPage === totalPages
                ? "border border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed pointer-events-none"
                : "border border-[#FAA93E] text-[#FAA93E] bg-white hover:bg-[#FAA93E] hover:text-white"
                }`}
              btn={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMenu;

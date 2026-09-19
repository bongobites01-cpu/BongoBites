import React from "react";
import { featuresData } from "../Hellper";
import Para from "../common/Para";

function Features() {
  return (
    <div className="md:py-6 py-5 bg-[#F9F6F0]">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-wrap justify-between items-center sm:gap-9 gap-6">
          {featuresData().map((feature) => (
            <div key={feature.id} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F3E8D8] flex items-center justify-center text-black">
                {feature.icon}
              </div>

              <Para
                para={feature.title}
                className="text-black font-inter md:text-base text-xs  max-w-[150px] font-medium leading-[144%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

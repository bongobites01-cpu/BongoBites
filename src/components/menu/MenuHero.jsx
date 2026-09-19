import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";

function MenuHero() {
  return (
    <div className="bg-menuherobg bg-center bg-cover">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex flex-col items-center justify-center w-full xl:pt-[178px] lg:pt-[168px] md:pt-[158px] sm:pt-[148px] pt-[138px] xl:pb-[164px] lg:pb-[154px] md:pb-[144px] sm:pb-[134px] pb-[124px]">
          <div className="flex flex-col gap-3.5 w-full max-w-[597px] items-center">
            <Heading
              className={
                "xl:text-[46px] lg:text-[40px] md:text-4xl sm:text-3xl text-2xl text-yellow-600 font-extrabold leading-[144%] font-kalam text-center"
              }
              heading={"Taste Something Amazing"}
            />
            <Para
              className={
                "lg:text-xl md:text-lg text-base font-inter font-medium leading-[144%] text-[#FFFFFF] text-center"
              }
              para={
                "Fresh ingredients, bold flavors, and dishes made to bring people together."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHero;

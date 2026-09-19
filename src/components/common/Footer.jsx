import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Para from "./Para";
import Button from "./Button";
import { footerCtaData, navbar, socialLinks } from "../Hellper";

function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top CTA Section */}
      <div className="w-full relative xl:py-12.5 lg:py-10 py-8  bg-cover bg-center bg-no-repeat bg-footerBG">
        {/* Dark overlay in case the background image is too bright, though usually these textured backgrounds are dark enough */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5 relative z-10 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col lg:gap-10 md:gap-8 gap-6 items-center">
            <div className="flex flex-col md:gap-3.5 gap-2 items-center">
              <div className="flex flex-col gap-2.5 items-center">
                <Subheading
                  subheading={footerCtaData.subheading}
                  className="text-[#FAA93E] md:text-sm text-xs font-bold leading-[144%] tracking-widest uppercase font-inter mb-4"
                />
                <Heading
                  heading={footerCtaData.heading}
                  className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold font-inter text-white leading-[144%] mb-4 max-w-[600px]"
                />
              </div>
              <Para
                para={footerCtaData.para}
                className="text-gray-200 font-inter md:text-base text-sm leading-[144%] max-w-[500px]"
              />
            </div>
            <div>
              <Button
                btn={footerCtaData.btnText}
                className="bg-[#FAA93E] text-black hover:bg-white transition-all font-bold md:text-base text-sm lg:px-8 md:px-6 px-5 md:py-3 py-2.5 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-[#11171C] py-4">
        <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5 flex flex-col gap-8">
          {/* Main Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-b border-gray-700 pb-8">
            {/* Logo */}
            <div className="w-[80px]">
              <Image
                className="sm:max-w-[80px] max-w-[70px] w-full"
                src={"/png/biteslogoo.png"}
                alt="biteslogoo.png"
                width={100}
                height={100}
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 md:gap-10">
              {/* {footerLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`font-inter text-sm md:text-base transition-all ${index === 0 ? "text-[#FAA93E] font-medium" : "text-gray-300 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ))} */}
              <ul className="flex gap-12.5">
                {navbar().map((item, index) => (
                  <li
                    key={index}
                    className="text-base font-inter font-bold leading-[144%] text-[#FFFFFF] hover:text-[#FDA839] transition-all duration-300"
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  className="text-white hover:text-[#FAA93E] transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-gray-400 font-inter text-xs md:text-sm">
            <p>@2026. All rights reserved</p>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p>
                Made with <span className="text-red-500">❤️</span> for food
                lovers
              </p>
              <Para
                para="Created by Kravy Software"
                className="text-[10px] md:text-xs text-gray-500 font-inter"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

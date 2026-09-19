"use client";

import Image from "next/image";
import { navbar } from "../Hellper";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#11171C] py-3">
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-20 md:px-15 sm:px-10 px-5">
        <div className="flex items-center justify-between">
          <div>
            <Image
              className="sm:max-w-[80px] max-w-[70px] w-full"
              src={"/png/biteslogoo.png"}
              alt="biteslogoo.png"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden sm:flex items-center gap-16">
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
            <div >
              <Link href="/#our-special-menu">
                <Button
                  btn={"Order Now"}
                  className={
                    "text-base font-inter font-semibold leading-[100%] text-[#000000] lg:py-3 md:py-2.5 py-2 lg:px-6 md:px-5 px-4 rounded-4xl bg-[#FAA93E] cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  }
                />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
      >
        <div className="p-5 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-8 px-5">
          <ul className="flex flex-col gap-6">
            {navbar().map((item, index) => (
              <li
                key={index}
                className="text-base font-inter font-bold leading-[144%] hover:text-[#FDA839] transition-all duration-300"
              >
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Link href="/#our-special-menu" onClick={() => setIsOpen(false)}>
              <Button
                btn={"Order Now"}
                className={
                  "text-base font-inter font-semibold leading-[100%] text-[#000000] py-3 px-6 rounded-4xl bg-[#FAA93E] cursor-pointer w-full"
                }
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
export default function Top() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl flex-shrink-0">
            <Link href="/" aria-label="Go to homepage" className="block">
              <Image
                src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/CompanyLogo_1760408974837.png"
                alt="MIG Welding Robot"
                width={200}
                height={200}
                className="w-[120px] sm:w-[150px] md:w-[140px] xl:w-[25%] 2xl:w-[35%] object-contain px-3"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 2xl:!text-xl xl:!text-lg">
             <Link href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

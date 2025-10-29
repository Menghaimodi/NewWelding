/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-10-14 09:50:15
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-10-14 19:01:18
 * @FilePath: \new-welding\src\app\components\Bottom\index.js
 * @Description: 
 * 
 */
"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { Carousel } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
export default function Bottom() {
  // const sectionRef = useRef(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         setTimeout(() => {
  //           entry.target.classList.add('active');
  //         }, 550); // 300ms延迟执行
  //       }
  //     });
  //   },
  //   { threshold: 0.1 }
  // );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);
  return (
       <footer  className="bg-black text-white py-16 px-4 lg:px-16">
        <div  className="container mx-auto">
          {/* Impact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-sm text-gray-400 mb-2">Impact</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 2xl:!text-6xl xl:!text-4xl">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-300 mb-6 max-w-md 2xl:!text-2xl xl:!text-xl xl:max-w-2xl">
                Measuring our commitment to technological innovation and global
                manufacturing excellence
              </p>
              <div className="text-gray-400">→</div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="border-l-4 border-white p-6">
                <div className="text-4xl font-bold mb-2 2xl:!text-6xl xl:!text-3xl">
                  380+
                </div>
                <div className="text-gray-300 text-sm 2xl:!text-lg xl:!text-base">
                  Patents and Copyrights
                </div>
              </div>
              <div className="border-l-4 border-white p-6">
                <div className="text-4xl font-bold mb-2 2xl:!text-6xl xl:!text-3xl">
                  34+
                </div>
                <div className="text-gray-300 text-sm 2xl:!text-lg xl:!text-base">
                  Countries Served
                </div>
              </div>
              <div className="border-l-4 border-white p-6">
                <div className="text-4xl font-bold mb-2 2xl:!text-6xl xl:!text-3xl">
                  128+
                </div>
                <div className="text-gray-300 text-sm 2xl:!text-lg xl:!text-base">
                 IIMT main team
                </div>
              </div>
              <div className="border-l-4 border-white p-6">
                <div className="text-4xl font-bold mb-2 2xl:!text-6xl xl:!text-3xl">
                  24/7
                </div>
                <div className="text-gray-300 text-sm 2xl:!text-lg xl:!text-base">
                  Global Support
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-16"></div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <div className="text-xl font-bold">
                  <Image
                     src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/CompanyLogo_1760408974837.png"
                    alt="MIG Welding Robot"
                    width={1400}
                    height={1300}
                    className="w-[45%] h-[60%] object-contain "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 xl:text-2xl">Company</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4  xl:text-2xl">Solutions</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    MIG Robot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Laser Robot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4  xl:text-2xl">Support</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4  xl:text-2xl">Connect</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4  xl:text-2xl">Global</div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors xl:text-xl xl:leading-10"
                  >
                    United States
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    China
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Europe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Asia Pacific
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors 2xl:!text-lg xl:!text-base xl:leading-10"
                  >
                    Middle East
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-3 border-white pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 2xl:!text-lg xl:!text-base">
              © 2025 IIMT Welding Robotics. All rights reserved.
            </div>
            <div className="flex items-center space-x-4  2xl:!text-lg xl:!text-base">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies Settings
              </a>
              <div className="flex space-x-3 ml-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>  
  )
}
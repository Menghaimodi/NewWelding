/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-09-22 17:35:51
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-11-13 10:27:35
 * @FilePath: \new-welding\src\app\page.js
 * @Description:
 *
 */
"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Carousel  } from "@arco-design/web-react";
import Top from "@/app/components/Top";
import Bottom from "@/app/components/Bottom";
import Link from "next/link";
import "@arco-design/web-react/dist/css/arco.css";

const textContent = [
  {
    title: "Professional Welding Technology",
    description:
      "Providing high-quality welding solutions to meet various industrial needs",
  },
  {
    title: "Advanced Equipment",
    description:
      "Using the latest welding equipment and technology to ensure quality and efficiency",
  },
  {
    title: "Rich Experience",
    description:
      "Years of welding experience providing professional technical support to customers",
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality control system ensuring high standards for every welding project",
  },
];
export default function Home() {
  const sectionRefs = useRef([]);
  const base =
    "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/";
  const filename = "南京公司大楼照片1_1758849804131.JPG";
  // 设置元素到数组
  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // 单次触发后停止观察
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Top />

      {/* Hero Section */}
      <section className=" relative h-screen flex items-center justify-center overflow-hidden">
        {/* 视频背景 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          poster="/hero-background.png"
        >
          <source
            src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/index_1762310304790.mp4"
            type="video/mp4"
          />
        </video>

        {/* 半透明遮罩层 */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* 内容层 */}
        <div
          ref={setSectionRef(0)}
          className="scroll-animation relative z-10 text-center text-white px-4 max-w-4xl mx-auto "
        >
          <h1 className="text-4xl md:!text-3xl 2xl:!text-6xl lg:!text-5xl  font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Welding the Future with Intelligent Robotics
          </h1>
          <p className="text-lg md:!text-xl lg:!text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your manufacturing with cutting-edge welding robots
            that deliver precision and efficiency. Transform your production
            capabilities with IIMT&apos;s advanced robotic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product?name=MIG Robot">
              <button className="w-full lg:h-[8vh] xl:text-xl bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                MIG Robot
              </button>
            </Link>
            <Link href="/product?name=Laser Robot">
              <button className="w-full lg:h-[8vh] xl:text-xl border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Laser Robot
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={setSectionRef(1)}
        className="py-16 lg:py-28 px-4 lg:px-16 scroll-animation"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="mb-3 text-base">Products</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Advanced welding solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for modern manufacturing challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto 2xl:!max-w-6xl xl:!max-w-4xl">
            <div className="p-8 bg-white rounded-2xl border-2 border-black hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <Image
                  src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/MIG_1760429365198.png"
                  alt="MIG Welding Robot"
                  width={500}
                  height={500}
                  className="w-full 2xl:h-[32vh] xl:h-[280px] object-contain"
                />
              </div>
              <div className="">
                <p className="leading-10">Innovation</p>
                <h3 className="text-2xl font-bold mb-4 text-black 2xl:!text-4xl xl:!text-2xl">
                  MIG Welding Robot
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 2xl:!text-lg xl:!text-base">
                  Portable, easy to deploy, and compatible with popular welding
                  machines. Supports multiple processes (straight, arc, weaving,
                  multi-pass) for automotive, shipbuilding, and steel
                  structures.
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/product?name=MIG Robot";
                  }}
                  className="xl:text-lg flex items-center text-black font-medium text-sm hover:text-gray-700 transition-colors"
                >
                  Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <Image
                  src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Laser_1760429195740.png"
                  alt="Laser Welding Robot"
                  width={400}
                  height={300}
                  className="w-full 2xl:h-[32vh] xl:h-[280px] object-contain "
                />
              </div>
              <p className="leading-10">Quality</p>
              <h3 className="text-2xl font-bold mb-4 text-black 2xl:!text-4xl xl:!text-2xl">
                Laser Welding Robot
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6  2xl:!text-lg xl:!text-base">
                Lightweight and efficient with advanced seam tracking. Ensures
                high-quality, stable welding for carbon steel, stainless steel,
                copper, and aluminum in aerospace, electronics, and precision
                industries.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/product?name=Laser Robot";
                }}
                className="xl:text-lg flex items-center text-black font-medium text-sm hover:text-gray-700 transition-colors"
              >
                Details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={setSectionRef(2)}
        className="py-16 lg:py-28  lg:px-16 bg-gray-50 scroll-animation"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="mb-6 xl:text-xl">Technology</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Key Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto xl:text-xl">
              Advanced robotic welding solutions for modern manufacturing
            </p>
          </div>
          <div className="space-y-8 flex flex-col items-center">
            {[
              {
                category: "Deployment",
                title: "Flexible Magnetic Base",
                description:
                  "Portable design enables quick setup and easy repositioning in various work environments.",
                video:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/MagneticBase_1762310122808.mp4",
              },
              {
                category: "Operation",
                title: "User-Friendly Interface",
                description:
                  "Intuitive drag-and-drop teaching system eliminates complex programming requirements.",
                video:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/User-FriendlyInterface_1758871925677.mp4",
              },
              {
                category: "Precision",
                title: "High-Accuracy Welding",
                description:
                  "Exceptional repeatability with precision ranging from ±0.02 to 0.05mm.",
                video:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Accuracy_1758871221256.mp4",
              },
              {
                category: "Versatility",
                title: "Multi-Process Capabilities",
                description:
                  "Supports multiple welding techniques including MIG/MAG and laser welding with advanced multi-pass functionality.",
                video:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Multi-ProcessCapabilities_1758871388568.mp4",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-black  m-4 xl:!max-w-screen-lg 2xl:!max-w-screen-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* 移动端：文字在上，图片在下；桌面端：根据奇偶数决定布局 */}
                  <div className="lg:hidden">
                    {/* 移动端布局：文字在上 */}
                    <div className="space-y-6 p-8">
                      <div className="text-gray-600 font-medium text-sm">
                        {service.category}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-base leading-6">
                        {service.description}
                      </p>
                      <div className="flex space-x-4">
                        <button className="text-sm px-4 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                          Details
                        </button>
                        <button
                          style={{ marginLeft: "4%" }}
                          className="text-sm text-black font-medium hover:underline"
                        >
                          More →
                        </button>
                      </div>
                    </div>
                    {/* 移动端布局：图片在下 */}
                    <div className="px-4 pb-4">
                      <video
                        className="w-full h-48 object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                        poster="/hero-background.png"
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  {/* 桌面端布局：根据奇偶数决定顺序 */}
                  <div className="hidden lg:contents">
                    {index % 2 === 0 ? (
                      // 偶数索引：文字在左，图片在右
                      <>
                        <div className="space-y-6 p-8">
                          <div className="text-gray-600 font-medium 2xl:!text-2xl xl:!text-lg">
                            {service.category}
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-4 2xl:!text-5xl xl:!text-3xl">
                            {service.title}
                          </h2>
                          <p className="text-gray-600 mb-6 2xl:!text-xl xl:!text-lg 2xl:!leading-9 xl:!leading-7">
                            {service.description}
                          </p>
                          <div className="flex space-x-4">
                            <button className="xl:mt-3 2xl:!text-xl xl:!text-lg px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                              Details
                            </button>
                            <button
                              style={{ marginLeft: "5%" }}
                              className="2xl:!text-xl xl:!text-lg  text-black font-medium hover:underline xl:mt-3 "
                            >
                              More →
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <video
                            className="w-full 2xl:!h-130 xl:!h-100 2xl:!object-cover xl:object-fill"
                            autoPlay
                            muted
                            loop
                            poster="/hero-background.png"
                          >
                            <source src={service.video} type="video/mp4" />
                          </video>
                        </div>
                      </>
                    ) : (
                      // 奇数索引：图片在左，文字在右
                      <>
                        <div className="flex justify-start">
                          <video
                            className="w-full 2xl:!h-130 xl:!h-110 2xl:!object-cover xl:!object-fill"
                            autoPlay
                            muted
                            loop
                            poster="/hero-background.png"
                          >
                            <source src={service.video} type="video/mp4" />
                          </video>
                        </div>
                        <div className="space-y-6 p-8">
                          <div className="text-sm text-gray-600 font-medium xl:text-2xl">
                            {service.category}
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-4 2xl:!text-5xl xl:!text-3xl">
                            {service.title}
                          </h2>
                          <p className="text-gray-600 mb-6 2xl:!text-xl xl:!text-base 2xl:!leading-9 xl:!leading-7">
                            {service.description}
                          </p>
                          <div className="flex space-x-4">
                            <button className="xl:mt-3 xl:text-xl px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                              Details
                            </button>
                            <button
                              style={{ marginLeft: "5%" }}
                              className="xl:text-xl text-black font-medium hover:underline xl:mt-3"
                            >
                              More →
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section
        ref={setSectionRef(3)}
        className="py-16 lg:py-28 scroll-animation"
      >
        <div className="container mx-auto px-4 lg:px-16">
          <div className="space-y-16 flex flex-col items-center">
            {[
              {
                category: "Solution",
                title: "Portable MIG Welding Robot",
                imgfile:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Solution_1760438819658.png",
                ImgItems: [
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/soulutionitem1_1760438357109.png",
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/soulutionitem2_1760438375381.png",
                ],
                features: [
                  "Portable with magnetic base - easy to deploy in any position",
                  "Drag-and-drop teaching - no coding required",
                  "Supports MIG/MAG processes (0.8-1.6 mm wires, 5-50 mm plates)",
                  "Multi-mode welding: straight, arc, weaving, multi-pass",
                  "Ideal for automotive, shipbuilding, aerospace, and steel structures",
                ],
                hrefName: "MIG Robot",
              },
              {
                category: "Innovation",
                title: "Portable Laser Welding Robot",
                imgfile:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Innovation_1760438861503.png",
                ImgItems: [
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/soulutionitem3_1760438620792.png",
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/soulutionitem2_1760438375381.png",
                ],
                features: [
                  "High-precision laser welding with seam tracking capability",
                  "Lightweight design for easy integration and deployment",
                  "Supports various materials: carbon steel, stainless steel, aluminum",
                  "Real-time quality monitoring and control systems",
                  "Perfect for electronics, aerospace, and precision manufacturing",
                ],
                hrefName: "Laser Robot",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="xl:pt-16 bg-white rounded-lg  p-2  xl:p-10 2xl:!p-8  xl:!max-w-screen-lg 2xl:!max-w-screen-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      {product.category}
                    </div>
                    <h2 className="text-3xl lg:text-4xl text-gray-900 xl:text-6xl xl:leading-20 xl:py-6">
                      {product.title}
                    </h2>
                    <div className="relative">
                      <Image
                        src={product.imgfile}
                        alt="MIG Welding Robot"
                        width={1800}
                        height={1600}
                        priority
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-18">
                    <div className="grid grid-cols-2 gap-4">
                      {product.ImgItems.map((item, index) => (
                        <div
                          key={index}
                          className={`relative aspect-[5/4] bg-gray-100 rounded-lg overflow-hidden shadow-md ${
                            index === 0 ? "mt-18" : index === 1 ? "-mt-8" : ""
                          }`}
                        >
                          <Image
                            src={item}
                            alt={`Welding Image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3 2xl:!text-lg xl:!text-base"
                          >
                            <span className="text-gray-600 mt-1">-</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </div>
                      <div className="flex space-x-4 pt-8">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/product?name=${product.hrefName}`;
                          }}
                          className="xl:text-lg px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors"
                        >
                          Explore
                        </button>
                        <button
                          style={{ marginLeft: "4%" }}
                          className="xl:text-lg text-black font-medium hover:underline"
                        >
                          Specifications →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        ref={setSectionRef(4)}
        className="py-16 lg:py-28 bg-gray-50 scroll-animation"
      >
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-500 mb-2 xl:text-xl">
              Applications
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 py-3">
              Proven in Multiple Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto  xl:text-xl">
              Versatile robotic solutions for diverse manufacturing sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
            {/* Automotive Manufacturing */}
            <div className="bg-white border-2 border-black rounded-lg overflow-hidden ">
              <div className="h-65 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image
                    src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Manufacturing_1758855568997.png"
                    alt="MIG Welding Robot"
                    width={1800}
                    height={1600}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm mb-2 2xl:!text-xl xl:!text-base">
                  Automotive
                </div>
                <h3 className="text-xl font-bold mb-3 2xl:!text-4xl xl:!text-2xl">
                  Manufacturing
                </h3>
                <p className="text-gray-600 mb-4 2xl:!text-xl xl:!text-base 2xl:!leading-8 xl:!leading-6">
                  Advanced welding solutions for automotive production
                </p>
                <button className="font-medium hover:underline 2xl:!text-xl xl:!text-base">
                  Details →
                </button>
              </div>
            </div>

            {/* Aerospace Engineering */}
            <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
              <div className="h-65 bg-gray-200 relative ">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image
                    src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Engineering_1758855867145.png"
                    alt="MIG Welding Robot"
                    width={1800}
                    height={1600}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm mb-2 2xl:!text-xl xl:!text-base">
                  Aerospace
                </div>
                <h3 className="text-xl font-bold mb-3 2xl:!text-4xl xl:!text-2xl ">
                  Engineering
                </h3>
                <p className="text-gray-600 mb-4 2xl:!text-xl xl:!text-base 2xl:!leading-8 xl:!leading-6">
                  Precision welding for aerospace components
                </p>
                <button className="font-medium hover:underline 2xl:!text-xl xl:!text-base">
                  Details →
                </button>
              </div>
            </div>

            {/* Marine Shipbuilding */}
            <div className="bg-white border-2 rounded-lg overflow-hidden">
              <div className="h-65 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image
                    src="https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/ShipbuildingSolutions_1758855987120.png"
                    alt="MIG Welding Robot"
                    width={1800}
                    height={1600}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm mb-2 2xl:!text-xl xl:!text-base">
                  Marine
                </div>
                <h3 className="text-xl font-bold mb-3 2xl:!text-4xl xl:!text-2xl 2xl:!leading-12 xl:!leading-8">
                  Shipbuilding Solutions
                </h3>
                <p className="text-gray-600 mb-4 2xl:!text-xl xl:!text-base 2xl:!leading-8 xl:!leading-6">
                  Robust welding technologies for marine construction
                </p>
                <button className="font-medium hover:underline xl:text-xl">
                  Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Automate Welding CTA Section */}
      <section className="py-16 lg:py-28 bg-white text-center">
        <div
          ref={setSectionRef(5)}
          className="container mx-auto px-4 lg:px-16 scroll-animation"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Automate Welding
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:text-xl">
              Transform your manufacturing process with our intelligent robotic
              welding solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="lg:text-2xl bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Quote
              </button>
              <button className="lg:text-2xl border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 lg:py-28 bg-blue-400">
        <div
          ref={setSectionRef(6)}
          className="scroll-animation container mx-auto px-4 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 xl:text-6xl">
                Success stories
              </h2>
              <p className="text-lg mb-8 xl:text-xl">
                Real-world results from our innovative solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-8 w-full max-w-full">
              <Carousel
                showArrow="never"
                indicatorPosition="outer"
                autoPlay={true}
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "200px",
                }}
              >
                {textContent.map((content, index) => (
                  <div
                    key={index}
                    className="text-center text-white px-2 sm:px-4"
                    style={{
                      minHeight: "200px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 8px",
                    }}
                  >
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight"
                      style={{
                        margin: "0 0 12px 0",
                        wordWrap: "break-word",
                        hyphens: "auto",
                      }}
                    >
                      {content.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full"
                      style={{
                        margin: "0",
                        wordWrap: "break-word",
                        hyphens: "auto",
                        lineHeight: "1.5",
                      }}
                    >
                      {content.description}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 集萃照片 */}
      <section>
        <div className="relative  overflow-hidden">
          <Image
            src={`${base}${encodeURIComponent(filename)}`}
            alt="MIG Welding Robot"
            width={1800}
            height={1600}
            quality={95}
                loading="lazy"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="w-full h-auto object-cover"
          />
          {/* 桌面布局 */}
          <div className="absolute inset-0 flex items-center justify-center hidden lg:flex">
            <div
              ref={setSectionRef(7)}
              className="max-w-4xl mx-auto text-center bg-white text-black p-10 scroll-animation"
            >
              <div className="xl:text-2xl">Innovation</div>
              <blockquote className="text-base 2xl:!text-2xl xl:!text-2xl font-light mb-8 leading-relaxed xl:mt-4">
                &quot;The company was founded in 2016 and is a high-tech
                enterprise dedicated to the research and development of
                human-machine integrated intelligent robots and application
                system solutions. The R&D team is composed of experienced and
                knowledgeable high-level talents with strong capabilities.&quot;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <div className="font-semibold xl:text-2xl">Contact </div>
                </div>
              </div>
            </div>
          </div>

          {/* 移动布局 */}
          <div className="lg:hidden  flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center bg-white text-black p-10">
              <div className="xl:text-2xl">Innovation</div>
              <blockquote className="text-base 2xl:!text-2xl xl:!text-2xl font-light mb-8 leading-relaxed xl:mt-4">
                &quot;The company was founded in 2016 and is a high-tech
                enterprise dedicated to the research and development of
                human-machine integrated intelligent robots and application
                system solutions. The R&D team is composed of experienced and
                knowledgeable high-level talents with strong capabilities.&quot;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <div className="font-semibold xl:text-2xl">Contact </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Bottom />
    </div>
  );
}

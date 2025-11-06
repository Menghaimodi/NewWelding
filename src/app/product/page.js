"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState, Suspense } from "react";
import Top from "@/app/components/Top";
import Bottom from "@/app/components/Bottom";
import { useSearchParams } from "next/navigation";
import productData from "@/app/enum/data.js";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Top />
      <Suspense fallback={<div />}>
        <ProductInner />
      </Suspense>

      {/* Footer */}
      <Bottom />
    </div>
  );
}

function ProductInner() {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name");
  const ProductName = useRef(null);
  const TechnicalList = useRef([]);
  const title2 = useRef(null);
  const video = useRef(null);
  const imageList = useRef([]);
  const imagetextList = useRef([]);
  const sectionRefs = useRef([]);

  const headline = useRef(null);
  const title = useRef(null);
  const nameRef = useRef("");
  const emailRef = useRef("");

  const messageRef = useRef("");
  const nameErrorRef = useRef("");

  const [, forceUpdate] = useState(0);
  const validateName = (value) => {
    const v = String(value || "").trim();
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "At least two characters";
    if (!/^[\p{L}\s.'-]+$/u.test(v)) return "Only letters, Spaces and .'-";
    return "";
  };

  const validateemai = (value) => {
    const v = String(value || "").trim();
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "At least two characters";
    if (!/^[\p{L}\s.'-]+$/u.test(v)) return "Only letters, Spaces and .'-";
    return "";
  };

  const handleNameChange = (e) => {
    nameRef.current = e.target.value;
    // 已存在错误时，实时更新错误提示
    if (nameErrorRef.current) {
      nameErrorRef.current = validateName(nameRef.current);
      forceUpdate((t) => t + 1);
    }
  };

  const handleNameBlur = () => {
    nameErrorRef.current = validateName(nameRef.current);
    // 触发一次刷新以更新错误提示
    forceUpdate((t) => t + 1);
  };

  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  const decodedName = nameParam ? decodeURIComponent(nameParam) : "";
  if (decodedName === "MIG Robot") {
    const migRobotData = productData["MIG Robot"];
    ProductName.current = migRobotData[0].Name; // 使用 [0]
    title2.current = migRobotData[0].Workable;
    video.current = migRobotData[0].video;
    imageList.current = migRobotData[0].imagelist;
    imagetextList.current = migRobotData[0].imagetextList;
    headline.current = migRobotData[0].headline;
    title.current = migRobotData[0].title;
  } else if (decodedName === "Laser Robot") {
    const migRobotData = productData["Laser Robot"];
    ProductName.current = migRobotData[0].Name; // 使用 [0]
    console.log("migRobotData:", migRobotData);
    video.current = migRobotData[0].video;
    title2.current = migRobotData[0].Workable;
    imageList.current = migRobotData[0].imagelist;
    imagetextList.current = migRobotData[0].imagetextList;
    headline.current = migRobotData[0].headline;
    title.current = migRobotData[0].title;
  }
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
    <div>
      {/* Home / Robots /  */}
      <section
        ref={setSectionRef(1)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-10 pt-30 "
      >
        {/* 移动端布局 */}
        <div className="lg:hidden">
          <div>
            {/*标题与简介 */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-10">
              <div className="lg:col-span-2">
                <p className="text-gray-600 xl:text-lg">
                  Home / Robots / Portable {ProductName.current}
                </p>
                <div
                  className="text-4xl 2xl:text-5xl  font-bold mb-3"
                  style={{ lineHeight: 2 }}
                >
                  {ProductName.current}
                </div>
                <p className="text-gray-600 xl:text-lg">
                  Precision welding for complex industrial environments
                </p>
              </div>
            </div>

            {/* 左侧 Includes 卡片 与 右侧 CTA */}
            <div className="grid grid-cols-1 gap-8">
              {/* Includes */}
              <div className="border-2 border-black rounded-lg p-6 ">
                <div className="font-semibold mb-4 text-base">Includes</div>
                <div className="grid grid-cols-1  gap-y-3 gap-x-6 text-lg">
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>IIMT-CI Cobot</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Welding machines</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Welding OS</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Magnetic Base</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Welding Torch</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Wire feeding</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Multi-metal welding capability</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span>✓</span>
                    <span>Adaptive welding modes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 桌面端布局 */}
        <div className="lg:flex justify-between lg:px-12 hidden ">
          <div>
            {/* 标题与简介 */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
              <div className="lg:col-span-2">
                <p className="text-gray-600 xl:text-lg">
                  Home / Robots / Portable {ProductName.current}
                </p>
                <div
                  className="text-4xl 2xl:text-5xl  font-bold mb-3"
                  style={{ lineHeight: 2 }}
                >
                  {ProductName.current}
                </div>
                <p className="text-gray-600 xl:text-lg">
                  Precision welding for complex industrial environments
                </p>
              </div>
            </div>

            {/* 左侧 Includes 卡片 与 右侧 CTA */}
            <div className="grid grid-cols-1 gap-8">
              {/* Includes */}
              <div className="w-full">
                <div className="border-2 border-black rounded-lg p-6 xl:mr-15 2xl:mr-0">
                  <div className="font-semibold mb-4 xl:text-2xl">Includes</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm xl:text-base">
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>IIMT-CI Cobot</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Welding machines</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Welding OS</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Magnetic Base</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Welding Torch</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Wire feeding</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Multi-metal welding capability</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>✓</span>
                      <span>Adaptive welding modes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* 右侧媒体与按钮 */}
            <aside className="lg:col-span-12">
              <div className="rounded-lg bg-gray-200 h-52 sm:h-64 flex items-center justify-center mb-4">
                <video
                  src={video.current}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                  poster="/hero-background.png"
                />
              </div>
              <div className="flex items-center">
                <div className="text-4xl font-bold mb-2 border-r-2 border-black pr-3 inline-block flex items-center">
                  $Available
                </div>
                <div className="text-sm text-gray-500 mb-4 ml-4">
                  <div>★★★★★</div>
                  <div>34 Countries verified reviews</div>
                </div>
              </div>

              <div className="space-y-3" style={{ lineHeight: 4.5 }}>
                <button className="2xl:text-lg w-full bg-blue-500 text-white px-6 py-3 rounded-3xl font-semibold hover:bg-blue-600 transition-colors">
                  Request quote
                </button>
                <button className="2xl:text-lg w-full border-2 border-gray-600 text-gray-700 px-6 py-3 rounded-3xl font-semibold hover:bg-gray-50 transition-colors">
                  Contact sales
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center">
                Custom solution guarantee
              </div>
            </aside>
          </div>
        </div>

        {/* 技术规格折叠 Section 模块 */}
        <div className="mt-12 lg:px-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Technical specifications
          </h2>
          <div className="border-t border-black/40">
            {/* Welding Type */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">Welding Type</span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base ">
                Support MIG/MAG welding, using 80% argon and 20% carbon dioxide
                mixture gas, solid/flux-cored welding wires
              </div>
            </details>

            {/* Robot Arm Installation Mode */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">
                  Robot Arm Installation Mode
                </span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                Front Installation, Inversion Installation, Side installation on
                right, Side installation on left
              </div>
            </details>

            {/* Diameter of Welding Wires */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">
                  Diameter of Welding Wires
                </span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                0.8~1.6mm
              </div>
            </details>

            {/* Workable Welding Thickness */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">
                  Workable Welding Thickness
                </span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                {title2.current}
              </div>
            </details>

            {/* Adaptable Welding Seam Type */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">
                  Adaptable Welding Seam Type
                </span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                Horizontal fillet weld, vertical fillet weld, flat weld,
                horizontal weld, vertical weld, upward weld, straight line, arc,
                wrap angle weaving welding Multi-layer and multi-pass welding
                can be done
              </div>
            </details>

            {/* About Welding Machine */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">
                  About Welding Machine
                </span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                Support a number of welding machines, including , Panasonic,
                Aotai, Megmet and other manufacturers. The welder supports
                air-cooled and water-cooled forms, typical welders, fast pulse
                welders and other forms.
              </div>
            </details>

            {/* Wire feeder */}
            <details className="group py-4 border-b border-gray-200">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">Wire feeder</span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                Support many brands of wire feeder machines
              </div>
            </details>

            {/* Programming */}
            <details className="group py-4">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold xl:text-lg">Programming</span>
              </summary>
              <div className="mt-3 text-sm text-gray-700 xl:text-base">
                Support welding process package and tree structure programming.
                In the process of welding positioning, the Free Drive can used
                to facilitate accurate positioning
              </div>
            </details>
          </div>
        </div>

        <div className="lg:hidden">
          {/* 右侧媒体与按钮 */}
          <aside className="lg:col-span-1">
            <div className="rounded-lg bg-gray-200 h-52 sm:h-64 flex items-center justify-center mb-4">
              <video
                src={video.current}
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
                poster="/hero-background.png"
              />
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold mb-2 border-r-2 border-black pr-3 inline-block flex items-center">
                $Available
              </div>
              <div className="text-sm text-gray-500 mb-4 ml-4">
                <div>★★★★★</div>
                <div>34 Countries verified reviews</div>
              </div>
            </div>

            <div className="space-y-3" style={{ lineHeight: 4.5 }}>
              <button className="2xl:text-lg w-full bg-blue-500 text-white px-6 py-3 rounded-3xl font-semibold hover:bg-blue-600 transition-colors">
                Request quote
              </button>
              <button className="2xl:text-lg w-full border-2 border-gray-600 text-gray-700 px-6 py-3 rounded-3xl font-semibold hover:bg-gray-50 transition-colors">
                Contact sales
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-3 text-center">
              Custom solution guarantee
            </div>
          </aside>
        </div>
      </section>

      {/* On-Demand Mobility Quick Deployment */}
      <section
        ref={setSectionRef(2)}
        className="scroll-animation container mx-auto lg:px-16  lg:py-16 flex"
      >
        <div className="container mx-auto  lg:px-16">
          <div className="space-y-16 flex flex-col items-center">
            {[
              {
                category: "Precision",
                title: "On-Demand Mobility Quick Deployment",
                imgfile:
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Percision_1761811313946.png",
                ImgItems: [
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Percision1_1761811376906.png",
                  "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Percision_1761811313946.png",
                ],
                features:
                  "IIMT portable welding robot, paired with a magnetic base, is easy to move and can be lifted with one hand. It comes standard with a 5-meter power cable (customization available) and supports vertical, lateral, and inverted orientations, allowing for installation and use at any working point.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="xl:pt-16 bg-white rounded-lg p-5 lg:p-10 2xl:!p-8  xl:!max-w-screen-lg 2xl:!max-w-screen-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="text-lg text-gray-600 font-medium">
                      {product.category}
                    </div>
                    <h2 className="text-3xl lg:text-4xl text-gray-900 xl:text-6xl xl:leading-20 xl:py-6 mb-8  lg:mb-0">
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
                      <div className="text-black text-lg leading-8 lg:text-xl lg:leading-10">
                        {product.features}
                      </div>
                      <div className="flex space-x-4 pt-8">
                        <button
                          onClick={() => router.push("/product")}
                          className="xl:text-lg px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors"
                        >
                          Replaceable
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

      {/* Powerful Functions No Programming */}
      <section
        ref={setSectionRef(3)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16"
      >
        <div className="space-y-8 flex flex-col items-center">
          {[
            {
              category: "Visually",
              title: "Powerful Functions No Programming",
              description:
                "JITRI transforms the experience of skilled welders into digital welding process packages, featuring a quick and intuitive interface. Users can easily set welding trajectories for straight welding, weave welding, and circular arc welding using the teaching pendant, as well as access various manual debugging functions such as simulated welding, manual wire feeding, wire retracting, gas inspection, and spot welding.",
              imgstr:
                "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Visually1_1761811956068.png",
              imgstr1:
                "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Visually_1761811877035.png",
              buttonText: "Digital",
            },
            {
              category: "Efficiency",
              title: "Drag and drop Easy to Master",
              description:
                "Leveraging JITRI's full-trajectory reproduction drag teaching technology, the welding robot requires only four steps to calibrate the welding joint positions, including safety points, arc starting points, arc extinguishing segments, and departure points. This allows for quick establishment of welding tasks, making it very accessible—ordinary workers can upgrade to skilled welders.",
              imgstr:
                "https://iimt-informatization.oss-cn-hangzhou.aliyuncs.com/temp/Efficiency_1761809758267.png",
              buttonText: "Performance",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  xl:!max-w-screen-lg 2xl:!max-w-screen-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
                {/* 移动端布局：文字在上，图片在下；桌面端：根据奇偶数决定布局 */}
                <div className="lg:hidden">
                  {/* 移动端布局：文字在上 */}
                  <div className="space-y-6">
                    <div className="text-gray-600 font-medium text-lg">
                      {service.category}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </div>
                    <div className="">
                      <Image
                        src={service.imgstr}
                        alt="spiral weave example"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                      {service.imgstr1 && (
                        <div className="p-4">
                          <Image
                            src={service.imgstr1}
                            alt="spiral weave example"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-2xl"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 text-base leading-8.5">
                      {service.description}
                    </p>
                    <div className="flex space-x-4">
                      <button className="text-sm px-4 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 桌面端布局：根据奇偶数决定顺序 */}
                <div className="hidden lg:contents">
                  {index % 2 === 0 ? (
                    // 偶数索引：文字在左，图片在右
                    <>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="">
                          <div className="text-gray-600 font-medium 2xl:!text-2xl xl:!text-lg">
                            {service.category}
                          </div>
                          <div className="text-3xl font-bold text-gray-900 mb-4 2xl:!text-5xl xl:!text-3xl 2xl:!leading-15">
                            {service.title}
                          </div>
                          <div>
                            <Image
                              src={service.imgstr}
                              alt="spiral weave example"
                              width={800}
                              height={600}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <Image
                            src={service.imgstr1}
                            alt="spiral weave example"
                            width={800}
                            height={600}
                            className="w-[80%] h-auto object-cover rounded-lg"
                          />
                          <p className="text-gray-600 w-[86%] mb-6 2xl:!text-xl xl:!text-lg 2xl:!leading-9 xl:!leading-7">
                            {service.description}
                          </p>
                          <div className="flex space-x-4">
                            <button className="xl:mt-3 2xl:!text-xl xl:!text-lg px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                              {service.buttonText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // 奇数索引：图片在左，文字在右
                    <>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15">
                        <div className="space-y-6 p-8">
                          <div className="text-sm text-gray-600 font-medium xl:text-2xl">
                            {service.category}
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-4 2xl:!text-5xl xl:!text-3xl 2xl:!leading-15">
                            {service.title}
                          </h2>
                          <p className="text-gray-600 mb-6 2xl:!text-xl xl:!text-base 2xl:!leading-9 xl:!leading-7">
                            {service.description}
                          </p>
                          <div className="flex space-x-4">
                            <button className="xl:mt-3 xl:text-xl px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors">
                              {service.buttonText}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <Image
                            src={service.imgstr}
                            alt="spiral weave example"
                            width={800}
                            height={600}
                            className="w-full h-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={setSectionRef(4)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16 "
      >
        <div className="text-sm text-gray-500 mb-2">Possibility</div>
        <div className="flex items-start justify-between">
          <h2 className="text-2xl lg:text-6xl font-bold mb-4 lg:!leading-20 lg:w-[50%]">
            {headline.current}
          </h2>
          <button className="px-5 lg:!text-lg py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors mt-2">
            More
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl lg:!text-lg text-base leading-8.5">
          {title.current}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card: Triangular */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[0].img1}
                alt="triangular weave example "
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[0]}
              </div>
              <button className=" w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Spiral */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[0].img2}
                alt="spiral weave example"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[1]}
              </div>
              <button className=" w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Trapezoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[0].img3}
                alt="trapezoidal weave example"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[2]}
              </div>
              <button className=" w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Sinusoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[0].img4}
                alt="sinusoidal weave example"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[3]}
              </div>
              <button className=" w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setSectionRef(5)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16 "
      >
        <div className="text-sm text-gray-500 mb-2">Possibility</div>
        <div className="flex items-start justify-between">
          <h2 className="text-2xl lg:text-6xl font-bold mb-4 lg:!leading-20 lg:w-[50%]">
            Supports Multiple Weave Patterns
          </h2>
          <button className="px-5 lg:!text-lg py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors mt-2">
            Tracking
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl lg:!text-lg text-base leading-8.5">
          Supports four weaving patterns: triangular, spiral, trapezoidal, and
          sinusoidal, to meet the needs of different welding scenarios.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card: Triangular */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[1].img1}
                alt="triangular weave example "
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[4]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Spiral */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={imageList.current[1].img2}
                width={800}
                height={600}
                alt="triangular weave example "
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[5]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Trapezoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[1].img3}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[6]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Sinusoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[1].img4}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[7]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setSectionRef(6)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16"
      >
        <div className="text-lg text-gray-500 mb-2">Whatever</div>
        <div className="flex items-start justify-between">
          <h2 className="text-2xl lg:text-6xl font-bold mb-4 leading-snug lg:leading-[5rem] lg:w-[70%] tracking-tight">
            Applicable to Various Metal Materials
          </h2>
          <button className="px-5 lg:!text-lg py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors mt-2">
            Product
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl lg:!text-lg text-base leading-8.5">
          Supports welding of various metals, including carbon steel, stainless
          steel,copper, and aluminum, with plate thicknesses ranging from 5 to
          50 mm. It ensures aesthetic and distortion-free welds in various
          production scenarios.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card: Triangular */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[2].img1}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />{" "}
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[8]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Spiral */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[2].img2}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[9]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Trapezoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[2].img3}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[10]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Sinusoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative ">
              <Image
                alt="triangular weave example "
                src={imageList.current[2].img4}
                width={800}
                height={600}
                className="w-full h-auto object-cover "
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4 ">
                {imagetextList.current[11]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setSectionRef(7)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16"
      >
        <div className="text-lg text-gray-500 mb-2">Innovation</div>
        <div className="flex items-start justify-between">
          <h2 className="text-2xl lg:text-6xl font-bold mb-4 lg:!leading-20 lg:w-[50%]">
            Applicable to Various Processes
          </h2>
          <button className="px-5 lg:!text-lg py-2 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors mt-2">
            Applications
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl lg:!text-lg text-base leading-8.5">
          Supports different welding processes, including weave welding,
          straight welding, circular arc welding, and multi-layer, multi-pass
          welding.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card: Triangular */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[3].img1}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[12]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Spiral */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[3].img2}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[13]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Trapezoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[3].img3}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[14]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>

          {/* Card: Sinusoidal */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                alt="triangular weave example "
                src={imageList.current[3].img4}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="font-semibold w-full flex justify-end lg:!text-lg py-4">
                {imagetextList.current[15]}
              </div>
              <button className="w-full mt-2 px-5 py-2 border-2 border-black rounded-full text-black text-sm hover:bg-black hover:text-white transition-colors">
                Optional
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setSectionRef(8)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-20"
      >
        <div className="border-2 border-black rounded-2xl p-12 lg:p-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Automate your welding process
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Transform manufacturing with intelligent robotic welding technology
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Quote
            </button>
            <button className="px-6 py-3 border-2 border-black rounded-full font-semibold text-black hover:bg-black hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </section>

      <section
        ref={setSectionRef(9)}
        className="scroll-animation container mx-auto px-4 lg:px-16 py-16"
      >
        <div className="text-lg text-gray-500 mb-2">Proven</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* 左侧联系信息 */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-700 mb-8 text-lg leading-8.5">
              Transforming manufacturing through precision robotics
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:marketing@iimt.org.cn" className="underline">
                  marketing@iimt.org.cn
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">☎️</span>
                <div className="space-y-1">
                  <div>+86 400 608 0040</div>
                  <div>+86 185 5176 7179</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div className="leading-relaxed">
                  No. 1, Shuzhi Xigu Science and Technology Innovation Plaza,
                  Building 1, Huafu Road, Jiangbei New District, Nanjing,
                  Jiangsu Province
                </div>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 mb-2">Name</label>
              <input
                type="text"
                placeholder=""
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                required
                autoComplete="name"
                aria-invalid={!!nameErrorRef.current}
                aria-describedby="name-error"
                className={`w-full border-2 rounded-xl p-3 focus:outline-none focus:ring-2 ${
                  nameErrorRef.current
                    ? "border-red-500 focus:ring-red-500"
                    : "border-black focus:ring-black"
                }`}
              />
              {nameErrorRef.current && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {nameErrorRef.current}
                </p>
              )}
              <label htmlFor="email" className="block text-gray-800 mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <label htmlFor="email" className="block text-gray-800 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Share your welding challenges"
                className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                className="w-5 h-5 border-2 border-black rounded"
              />
              I agree to terms and conditions
            </label>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
              onClick={() => {
                Message.info("This is an info message!");
              }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

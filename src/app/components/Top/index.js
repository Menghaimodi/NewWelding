/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-10-14 09:50:08
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-11-06 16:21:35
 * @FilePath: \new-welding\src\app\components\Top\index.js
 * @Description:
 *
 */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@arco-design/web-react/dist/css/arco.css";
import { Dropdown, Menu, Button, Space } from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";
import MobileModal from "../MobileModal";
export default function Top() {
  const [openMobileModal, setOpenMobileModal] = useState(false);
  const dropList = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/product?name=MIG Robot";
        }}
      >
        MIG Robot
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/product?name=Laser Robot";
        }}
      >
        Laser Robot
      </Menu.Item>
      <Menu.Item key="3">Use Cases</Menu.Item>
    </Menu>
  );
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
            <Link
              href="/"
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
              {/* Services */}
              <Dropdown droplist={dropList} position="bl">
                <Button
                  type="text"
                  className="!text-lg hover:!text-gray-600 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  Services <IconDown />
                </Button>
              </Dropdown>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setOpenMobileModal(true)}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* 移动端弹窗：仅在 <md 可见 */}
      <MobileModal
        open={openMobileModal}
        onClose={() => setOpenMobileModal(false)}
        title="Request Quote"
      />
    </nav>
  );
}

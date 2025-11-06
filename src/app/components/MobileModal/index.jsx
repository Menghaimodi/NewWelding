/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-10-30 16:47:16
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-11-06 11:40:42
 * @FilePath: \new-welding\src\app\components\MobileModal\index.jsx
 * @Description:
 *
 */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconDown } from "@arco-design/web-react/icon";
export default function MobileModal({ open, onClose, title, children }) {
  if (!open) return null;
  // 入场/退场过渡控制
  const [visible, setVisible] = React.useState(false);
  const [openSolutions, setOpenSolutions] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 300); // 与 duration-300 对齐
  };
  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* 背景遮罩 */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ease-out duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-label="Close modal overlay"
      />

      {/* 底部抽屉内容 */}
      <div
        className={`absolute inset-x-0 top-0 rounded-t-2xl bg-neutral-900 text-white shadow-xl transform-gpu transition-all ease-out duration-300 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-lg font-semibold">
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
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Close"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        {/* 内容区域 */}
        <div className="px-4 py-4 space-y-3">
          {children ?? (
            <div>
              <div className="text-center text-lg leading-12">
                <div>Home</div>
                <div>About</div>
                <div>Products</div>
                {/* Solutions 展开面板 */}
                <button
                  type="button"
                  onClick={() => setOpenSolutions((v) => !v)}
                  className="w-full  flex items-center justify-center py-2 px-2 rounded-lg  hover:bg-white/10 transition-colors"
                  aria-expanded={openSolutions}
                  aria-controls="solutions-panel"
                >
                  <span className="mr-3">Solutions</span>
                  <span
                    className={`transition-transform ${
                      openSolutions ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <IconDown />
                  </span>
                </button>

                {openSolutions && (
                  <div
                    id="solutions-panel"
                    className="mt-2 space-y-2 text-base"
                  >
                    <Link
                      href="/product?name=MIG Robot"
                      className="block py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/product?name=MIG Robot";
                      }}
                    >
                      MIG Robot
                    </Link>
                    <Link
                      href="/product?name=Laser Robot"
                      className="block py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/product?name=Laser Robot";
                      }}
                    >
                      Laser Robot
                    </Link>
                    <Link href="/use-cases" className="block py-1">
                      Use Cases
                    </Link>
                  </div>
                )}
              </div>
              <div className="leading-14">
                <button
                  type="button"
                  className="w-full rounded-2xl border-2 border-white bg-transparent hover:bg-blue-700 hover:border-white text-white font-medium py-2 text-lg transition-colors"
                >
                  Contact
                </button>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-[#4186F6] hover:bg-blue-700 text-white font-medium py-2 text-lg"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

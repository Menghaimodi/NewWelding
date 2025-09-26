/*
 * @Author: 我会想你的哈哈 2421145805@qq.com
 * @Date: 2025-09-22 17:35:51
 * @LastEditors: 我会想你的哈哈 2421145805@qq.com
 * @LastEditTime: 2025-09-26 16:18:56
 * @FilePath: \new-welding\next.config.mjs
 * @Description: 
 * 
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["iimt-informatization.oss-cn-hangzhou.aliyuncs.com"],
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

export default nextConfig;

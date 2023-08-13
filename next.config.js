/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img2.pngdownload.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.toyota.astra.co.id",
      },
      {
        protocol: "https",
        hostname: "astradaihatsu-sahabatku.com",
      },
      {
        protocol: "https",
        hostname: "hondaserangbanten.com",
      },
      {
        protocol: "https",
        hostname: "www.nasmocomagelang.com",
      },
      {
        protocol: "https",
        hostname: "www.motortrend.com",
      },
      {
        protocol: "https",
        hostname: "static.rajamobil.com",
      },
    ],
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;

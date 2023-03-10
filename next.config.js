/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "www.linkpicture.com","encrypted-tbn0.gstatic.com"],
  },
  // pageExtensions: ['NorthData.js', 'SouthData.js', 'WestData.js', 'EastData.js',"AreaData.js"],
};

module.exports = nextConfig;

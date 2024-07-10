// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const config = {
    async rewrites() {
      return [
        {
          source: "/api",
          destination: "http://44.223.115.155:5000/api/selection"
        },
      ];
    },
  };
  
  export default config;
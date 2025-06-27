/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
        },
        {
          protocol: "http",
          hostname: "example.com",
        },
        {
          protocol: "https",
          hostname: "i.pravatar.cc",
        }
       
      ],
    },
    env: {
      BASE_URL: process.env.NEXT_PUBLIC_BASE_API,
  },
  };

export default nextConfig;

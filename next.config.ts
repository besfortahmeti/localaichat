import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "https://localhost:3000",
    "paratactical-emmy-galliardly.ngrok-free.dev",
  ],
  reactCompiler: true,
};

export default nextConfig;

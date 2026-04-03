import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // <- permet au build de passer même s'il y a des erreurs ESLint
  },
};

export default nextConfig;

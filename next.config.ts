import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // point to the current project root so Next can find your `app` directory
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

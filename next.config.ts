import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Spotify cover art for the Mad Cactus release grid.
    remotePatterns: [new URL("https://i.scdn.co/image/**")],
  },
};

export default nextConfig;

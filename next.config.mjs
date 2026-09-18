// Same host config/assets.js builds URLs from — keep these in sync.
// Override via NEXT_PUBLIC_ASSET_BASE_URL in .env.local for local/staging media servers.
const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_BASE_URL || "https://assets.spacesarchitects-ka.com";
const assetHost = new URL(ASSET_BASE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      {
        protocol: assetHost.protocol.replace(":", ""), // "http" or "https"
        hostname: assetHost.hostname, // e.g. "assets.spacesarchitects-ka.com"
        ...(assetHost.port ? { port: assetHost.port } : {}),
        pathname: "/assets/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/jaipure-residence",
        destination: "/projects/jaipur-residence",
        permanent: true,
      },
      {
        source: "/projects/color-box-office",
        destination: "/projects/the-color-box-office",
        permanent: true,
      },
      {
        source: "/projects/screen-house",
        destination: "/projects/the-screen-house",
        permanent: true,
      },
      {
        source: "/projects/the-blue-courtyard",
        destination: "/projects/house-of-blue-courtyard",
        permanent: true,
      },
      {
        source: "/projects/the-heritage-park",
        destination: "/projects/heritage-park",
        permanent: true,
      },
      {
        source: "/projects/house-of-dancing-screen",
        destination: "/projects/house-of-dancing-screens",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

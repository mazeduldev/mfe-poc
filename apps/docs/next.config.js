import { withMicrofrontends } from "@vercel/microfrontends/next/config";
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  basePath: "/docs",
};

export default withMicrofrontends(nextConfig);

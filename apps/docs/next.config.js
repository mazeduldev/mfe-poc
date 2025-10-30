import { withMicrofrontends } from "@vercel/microfrontends/next/config";
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
};

export default withMicrofrontends(nextConfig);

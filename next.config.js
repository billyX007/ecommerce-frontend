/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOCAL_URL: process.env.LOCAL_URL,
    PROD_URL: process.env.PROD_URL,
    SELF: process.env.SELF,
    SELF_API: process.env.SELF_API,
  },
};

module.exports = nextConfig;

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/fees/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:4001",
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "main",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            service1: `service1@${process.env.NEXT_PUBLIC_SERVICE1_URL}`,
            service2: `service2@${process.env.NEXT_PUBLIC_SERVICE2_URL}`,
            // service2:
            //   process.env.SERVICE2_URL ||
            //   "service2@http://localhost:4001/remoteEntry.js",
          },
          shared: [
            // {
            //   react: {},
            // },
            // {
            //   "react-dom": {
            //     eager: true,
            //     singleton: true,
            //     requiredVersion: false,
            //   },
            // },
          ],
          extraOptions: {
            exposePages: true,
          },
        })
      );
    }
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;

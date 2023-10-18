const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "main",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            service1:
              `service1@${process.env.SERVICE1_URL}` ||
              "service1@http://localhost:5001/remoteEntry.js",
            service2:
              process.env.SERVICE2_URL ||
              "service2@http://localhost:4001/remoteEntry.js",
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

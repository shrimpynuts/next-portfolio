// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS();

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: "empty"
        };
      }
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000000,
            name: "[name].[ext]"
          }
        }
      }),
        config.resolve.modules.push(__dirname);
  
      config.resolve.alias = {
        ...config.resolve.alias
      };
  
      return config;
    }
};
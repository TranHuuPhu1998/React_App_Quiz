const withImages = require("next-images")
const withCSS = require('@zeit/next-css')
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      return config;
    },
    cssModules: true,
    tsCssModules: true,
    sassLoaderOptions: {}
  }),
  withImages(),
  withCSS()
);

const withImages = require("next-images")
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withImages(
    withSass(
        {
            cssModules: true,
            cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
        }
    ),
    withCSS()
);
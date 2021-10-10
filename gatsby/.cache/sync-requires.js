const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-js": hot(preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/templates/Product.js"))),
  "component---src-pages-stuff-js": hot(preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/stuff.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/index.js")))
}


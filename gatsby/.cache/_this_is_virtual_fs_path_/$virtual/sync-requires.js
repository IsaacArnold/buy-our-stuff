
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/index.js")),
  "component---src-pages-stuff-js": preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/pages/stuff.js")),
  "component---src-templates-product-js": preferDefault(require("/Users/IsaacArnold/Documents/web-projects/buy-our-stuff/gatsby/src/templates/Product.js"))
}


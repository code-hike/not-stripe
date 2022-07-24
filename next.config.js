const theme = require("shiki/themes/nord.json")
const { remarkCodeHike } = require("@code-hike/mdx")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]]
  }
})

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
})

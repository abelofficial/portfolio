const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack5: false,
  enableSvg: true,
  pageExtensions: [
    "page.jsx",
    "page.js",
    "page.ts",
    "page.tsx",
    "api.js",
    "api.ts",
  ],
  webpack(config, options) {
    return config;
  },
});

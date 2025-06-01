// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// } 

// postcss.config.js (New way)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package
    autoprefixer: {},
  },
};
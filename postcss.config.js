// const postcss_import = require('postcss-import')
// const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
// const cssnano = require('cssnano')

module.exports = {
  plugins: [
    // postcss_import,
    // tailwindcss,
    autoprefixer,
    purgecss({ content: ['./src/**/*.html']}),
    // cssnano({ preset: 'default'})
  ]
}

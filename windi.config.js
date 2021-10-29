const { defineConfig } = require('windicss/helpers')

module.exports = exports = defineConfig({
  darkMode: 'class',
  theme: {},
  shortcuts: {},
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography')
  ]
})

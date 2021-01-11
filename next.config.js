const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const webpack = require('webpack')
const path = require('path')
const nextTranslate = require('next-translate')

module.exports = withPlugins([[withImages], [nextTranslate]], {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})

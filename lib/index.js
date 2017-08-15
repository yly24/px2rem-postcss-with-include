'use strict'

var postcss = require('postcss')
var Px2rem = require('px2rem')

module.exports = postcss.plugin('postcss-px2rem', function (options) {
  return function (css, result) {
    var cssObject = css
    if (!options.exclude || css.source.input.file.indexOf('node_modules') === -1) {
      var oldCssText = css.toString()
      var px2remIns = new Px2rem(options)
      var newCssText = px2remIns.generateRem(oldCssText)
      cssObject = postcss.parse(newCssText)
    }
    result.root = cssObject
  }
})

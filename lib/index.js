'use strict'

var postcss = require('postcss')
var Px2rem = require('px2rem')

module.exports = postcss.plugin('postcss-px2rem-exclude', function (options) {
  return function (css, result) {
    if (options.exclude) {
      if (Object.prototype.toString.call(options.exclude) !== '[object RegExp]') {
        throw new Error('options.exclude should be RegExp!')
      }
      if (css.source.input.file.match(options.exclude) !== null) {
        return result.root = css
      }
    }
    var oldCssText = css.toString()
    var px2remIns = new Px2rem(options)
    var newCssText = px2remIns.generateRem(oldCssText)
    result.root = postcss.parse(newCssText)
  }
})

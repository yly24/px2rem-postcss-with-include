'use strict';

var postcss = require('postcss');
var Px2rem = require('px2rem');

module.exports = postcss.plugin('px2rem-postcss-with-include', function (options) {
    return function (css, result) {
        var isInclude = false
        if(Array.isArray(options.include)) {
            isInclude = options.include.some(function(item) {
                return css.source.input.file.match(item) != null
            })
        } else {
            isInclude = options.include && css.source.input.file.match(options.include) !== null
        }
        if (isInclude) {
            var oldCssText = css.toString();
            var px2remIns = new Px2rem(options);
            var newCssText = px2remIns.generateRem(oldCssText);
            result.root = postcss.parse(newCssText)
        } else {
            result.root = css;
        }

    }
});

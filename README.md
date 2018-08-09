# postcss-px2rem-include

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the include option.

Inspired by [postcss-px2rem-exclude](https://github.com/saionjisekai/px2rem-postcss).

[![Downloads][downloads-image]][downloads-url]

[downloads-image]: https://img.shields.io/npm/dm/postcss-px2rem-include.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/postcss-px2rem-include

## Useage

### .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /folder_name/i
    }
  }
}
```

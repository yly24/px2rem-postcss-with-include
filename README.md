# postcss-px2rem-exclude

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the exclude folder option.

> .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules|vux/
    }
  }
}
```

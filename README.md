# postcss-px2rem-exclude

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the exclude folder option.

> .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules/
    }
  }
}
```
# latest 

## 0.0.4

* The string condition is changed to a regular expression.
# postcss-px2rem-exclude

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the exclude folder options.

> .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'autoprefixer': {},
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: 'node_modules'
    }
  }
}
```

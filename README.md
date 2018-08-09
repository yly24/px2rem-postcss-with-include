# postcss-px2rem-include

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the include option.

Inspired by [postcss-px2rem-exclude](https://github.com/saionjisekai/px2rem-postcss).

## Useage

### .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-include': {
      remUnit: 75,
      include: /folder_name/i
    }
  }
}
```

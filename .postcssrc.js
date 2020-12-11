const autoprefixer = require('autoprefixer');
const postcssPxToViewport = require('postcss-px-to-viewport');

// https://github.com/michael-ciniawsky/postcss-load-config
const browsers = [
  'last 3 versions',
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'ios >= 6',
  'android >= 4'
  // and_ff: firefox安卓浏览器
  // and_qq: QQ浏览器安卓版
  // and_uc: UC浏览器安卓版
  // ChromeAndroid: 谷歌浏览器安卓版
  // Edge: 微软的Edge浏览器
];

const plugins = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-aspect-ratio-mini'),
  require('postcss-write-svg')({
    utf8: false
  }),
  autoprefixer(browsers),
  postcssPxToViewport({ 
    unitToConvert: "px", // 要转化的单位
    viewportWidth: 375, // UI设计稿的宽度
    viewportHeight: 667,// UI设计稿的高度
    unitPrecision: 8, // 转换后的精度，即小数点位数
    viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类名，
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    landscape: false // 是否处理横屏情况
  })
];
module.exports = {
  plugins
}
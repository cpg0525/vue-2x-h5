const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    vendorDll: ["vue-router"]
  },
  output: {
    filename: "[name].dll.[hash:6].js",
    path: path.resolve(__dirname, "dll"),
    library: "[name]_dll" //暴露给外部使用
    //libraryTarget 指定如何暴露内容，缺省时就是 var
  },
  plugins: [
    new webpack.DllPlugin({
      //name和library一致
      name: "[name]_dll",
      path: path.resolve(__dirname, "dll", "manifest.json")
    })
  ]
};

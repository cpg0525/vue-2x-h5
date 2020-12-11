"use strict";
const path = require("path");
const utils = require("./utils");
const config = require("../config");
const vueLoaderConfig = require("./vue-loader.conf");
const webpack = require("webpack");
const PostCompilePlugin = require("webpack-post-compile-plugin");
const TransformModulesPlugin = require("webpack-transform-modules-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

// 可以通过预热 worker 池(worker pool)来防止启动 worker 时的高延时。

// 这会启动池(pool)内最大数量的 worker 并把指定的模块载入 node.js 的模块缓存中。


// const threadLoader = require('thread-loader');

// threadLoader.warmup({
//   // pool options, like passed to loader options
//   // must match loader options to boot the correct pool
// }, [
//   // modules to load
//   // can be any module, i. e.
//   'babel-loader',
//   'babel-preset-es2015',
//   'sass-loader',
// ]);

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [resolve("src"), resolve("test")],
  options: {
    formatter: require("eslint-friendly-formatter"),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

module.exports = smp.wrap({
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  // externals : {
  //   vue: 'Vue',
  //   vuex: 'Vuex'
  // },
  resolve: {
    extensions: [".js", ".vue", ".json", ".scss"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      assets: resolve("src/assets")
    }
  },
  module: {
    noParse: /jquery|lodash/, 
    //fix "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
    unknownContextCritical: false,
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js[x]?$/,
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
        include: [
          resolve("src")
          // resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common.js"),
    new PostCompilePlugin(),
    new TransformModulesPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
});

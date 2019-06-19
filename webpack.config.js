const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const merge = require("webpack-merge");

let config = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: "vue-currency.js",
    path: path.resolve(__dirname, "dist"),
    library: 'VueCurrency',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src/")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

if (process.env.NODE_ENV === "development") {
  config = merge(config, {
    entry: "./demo/main.js",
    devServer: {
      stats: "errors-only"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ]
  });
}

if (process.env.NODE_ENV === "production") {
  config = merge(config, {
    devtool: "#source-map",
    plugins: [
      new CleanWebpackPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ]
  });
}

module.exports = config;

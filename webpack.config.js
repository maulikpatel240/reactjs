// Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');

const isProduction = process.env.NODE_ENV == "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.js",
  output: {
    // path: path.join(__dirname, 'public'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new RetryChunkLoadPlugin({
    //   maxRetries: 3,
    // }),

    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),

    isProduction && new ReactRefreshWebpackPlugin()
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: { modules: [path.resolve(__dirname, './src'), 'node_modules'] }
  // resolve: { extensions: ["*", ".js", ".jsx"] },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};

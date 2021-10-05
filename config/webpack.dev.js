const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devConfig = (env) => ({
  mode: 'development',
  target: 'web',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MODE': JSON.stringify(env.mode),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',
});

module.exports = (env) => {
  return merge(commonConfig, devConfig(env));
};

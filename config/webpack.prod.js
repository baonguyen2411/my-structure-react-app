const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const commonConfig = require('./webpack.common');

const prodConfig = (env) => ({
  mode: 'production',
  target: 'browserslist',
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 8,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
    moduleIds: 'deterministic',
    runtimeChunk: true,
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      //  Repeat packaging problem
      cacheGroups: {
        vendor: {
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          name: 'node_vendors', // part of the bundle name and
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      defaultSizes: 'gzip',
      generateStatsFile: true,
    }),
    new HtmlWebpackPlugin({
      title: 'My Structure React App',
      template: 'public/index.html',
      favicon: 'src/assets/images/favicon.ico',
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: '[chunkhash].[name].css',
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
      caching: true,
      flattening: true,
    }),
    new WebpackPwaManifest({
      name: 'My Structure React App',
      short_name: 'MyApp',
      description: 'Web App!',
      theme_color: '#ffffff',
      background_color: '#e5e5e5',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/images/logo-512.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new webpack.DefinePlugin({
      'process.env.MODE': JSON.stringify(env.mode),
    }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: 'warning',
    // Calculates sizes of gziped bundles.
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js.gz');
    },
  },
});

module.exports = (env) => {
  return merge(commonConfig, prodConfig(env));
};

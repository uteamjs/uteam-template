const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})

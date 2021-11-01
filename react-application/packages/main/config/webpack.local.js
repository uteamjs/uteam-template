const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: false,  // false for hashrouter, true for BrowseerRouter
    //contentBase: paths.build,
    static: paths.build,
    open: false,
    compress: true,
    host: '0.0.0.0',
    hot: true,
    port: 3000,
  },

  plugins: [
    new Dotenv({
      path: './config/.env.local',    //User in remoteAction/fetch
    })
  ]
})

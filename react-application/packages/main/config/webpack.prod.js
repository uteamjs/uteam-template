const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.prod')

module.exports = merge(common, {
  //output: {
    //publicPath: '/smc/',
  //},

  plugins: [
    new Dotenv({
      path: './config/.env.production',
    }),
  ]
})

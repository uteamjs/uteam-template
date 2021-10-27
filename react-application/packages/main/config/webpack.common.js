const paths = require('./paths')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const externalReact = require('webpack-external-react');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: './src/index.js',

  stats: {
    warningsFilter: [
      './~/sass-loader'
    ]
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: 'js/[name].bundle.js',  //'js/[name].[contenthash].bundle.js', //'[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    // Copies files from target to destination folder

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Project Title',
      favicon: paths.src + '/assets/icons/favicon.png',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    })
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, '../..'), /uteam-react\/packages/],
        use: {
          loader: 'babel-loader'
        }
      },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          //MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
    ],
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}

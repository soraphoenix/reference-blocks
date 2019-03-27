
const path = require('path');
const webpack = require('webpack')

const VENDOR_LIBS = [
  'redux', 'react-redux', 'react-dom'
]

module.exports = {
  entry: {
    firstComp: './assets/js/firstComp/firstComp.js',
    // regularJS: './assets/js/regularJS.js',
    vendor: VENDOR_LIBS
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname, 'public/js/components') },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env', 'stage-0', 'react'
          ]
        }
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
    ]
  }
};

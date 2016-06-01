'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};
var reactDomExternal = {
  root: 'ReactDom',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  // The css to generate
  new ExtractTextPlugin('mg-react-ui-toolkit.css', { allChunks: true })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }}));
}

module.exports = {
  externals: {
    'react': reactExternal,
    'react-dom': reactDomExternal
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    // ExtractTextPlugin is used to generate the css files
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader'
      ),
    },
    {
      test: /\.less/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader!less-loader'
      ),
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot(\?v=\d+\.\d+\.\d+)?$/i,
      loader: 'file-loader?name=[path][name].[ext]'
    },
  ]
  },
  output: {
    // Required in order to be recognized when used in external project
    library: 'mg-react-ui-toolkit',
    libraryTarget: 'umd'
  },
  plugins: plugins,
};

const path = require('path');
const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './firebaseHosting/public'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
            // Include the UI toolkit directly from the `src` folder of the uiToolkit
          'mg-react-ui-toolkit': path.join(__dirname, '..', 'src'),
            // Following lines have 2 purposes:
            // 1) Force to use the local version of React and ReactDOM (in case of multiple React inclusions)
            // INFO: http://stackoverflow.com/questions/31169760/how-to-avoid-react-loading-twice-with-webpack-when-developing
            // 2) Avoid exceptions when uiToolkit components are compiled
            // since they requires them and the toolkit package.json doesn't include them
          react: path.resolve('./node_modules/react'),
          'react-dom': path.resolve('./node_modules/react-dom'),
        },
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
        {
          test: /\.css/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader',
          include: path.join(__dirname, '..', 'src'),
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot(\?v=\d+\.\d+\.\d+)?$/i,
          loader: 'file-loader?name=[path][name].[ext]?[hash]',
          exclude: /node_modules/,
        },
      ],
  },
};

module.exports = config;

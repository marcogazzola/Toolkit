var path = require('path');
var webpack = require('webpack');
console.log('>>>', path.join(__dirname, '..', '..', 'src'))
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
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
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel','webpack-module-hot-accept'],
            exclude: /node_modules/,
        },
        {
            test: /\.css/,
            loader: 'style-loader!css-loader',
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader',
            include: path.join(__dirname, '..', 'src')
        },
        {
            test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot(\?v=\d+\.\d+\.\d+)?$/i,
            loader: 'file-loader?name=[path][name].[ext]?[hash]',
            exclude: /node_modules/
        }
        ]
    }
};

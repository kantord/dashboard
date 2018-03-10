const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  target: 'web',
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'dashboard.js',
    chunkFilename: '[name].bundle.js',
    library: 'dashboard',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'lib')
  },
  devServer: {
    contentBase: './lib'
  },
  module: {
    rules: [
      {
		test: /\.scss$/,
		use: [{
			loader: "fake-style-loader" // creates style nodes from JS strings
		}, {
			loader: "css-loader" // translates CSS into CommonJS
		}, {
			loader: "sass-loader" // compiles Sass to CSS
		}]
	  },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }
};

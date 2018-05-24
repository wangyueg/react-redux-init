const webpack = require('webpack');
const path = require('path');
const cwd = process.cwd();

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: {
		app: process.env.NODE_ENV === 'production' ? ['babel-polyfill', './src/index.js'] : ['babel-polyfill', 'webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js']
	},
	output: {
		path: path.join(cwd, 'public'),
		filename: 'scripts/[name].[hash].js'
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["env", "react"],
							plugins: [require('babel-plugin-transform-object-rest-spread')]
						}
					}
				]
			},
			{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000,
		          name: '[name].[hash:16].[ext]'
		        }
		    }
		]
	},
	devtool: process.env.NODE_ENV === 'production' ? '' : 'cheap-module-source-map'
}
//开发环境下不使用ExtractTextPlugin('css/main.css')，使用这个会造成.css(scss)文件独立出来，不刷新页面

//设置NODE_ENV
process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


let webpackDevConfig = merge(webpackBaseConfig, {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]																			
	},
	plugins: [
		new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify('development')
	    }),
		new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoEmitOnErrorsPlugin()
	]
});

module.exports = webpackDevConfig;
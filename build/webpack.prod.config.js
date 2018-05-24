const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack');

let webpackDevConfig = merge(webpackBaseConfig, {
	entry: {
		vender: [
			'react',
			'redux',
			'react-router-dom',
			'babel-polyfill',
			'whatwg-fetch'
		]
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: new ExtractTextWebpackPlugin({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]																			
	},
	plugins: [
		new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify('production')
	    }),
		new HtmlWebpackPlugin({
			title: 'Development Prod',
			template: 'index.template.html'
		}),
		//提取css至独立文件
		new ExtractTextWebpackPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
		//压缩css
		new OptimizeCssAssetsPlugin(),
		//提取公共JS
		new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      filname: '[name].[chunkhash].js'
	    }),
    	new webpack.ProvidePlugin({
    		'fetch': 'exports-loader?self.fetch!whatwg-fetch'
    	})
	]
});

module.exports = webpackDevConfig;
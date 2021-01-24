const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Gimme Chaos',
			template: './src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'cv/index.html',
			title: 'Gimme Chaos — CV',
			template: './src/cv.html'
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};

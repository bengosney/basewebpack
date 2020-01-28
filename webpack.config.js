const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
	app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
	contentBase: './dist',
    },
    plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
	    title: 'Output Management',
	}),
	new MiniCssExtractPlugin()
    ],
    output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist'),
    },
    module: {
	rules: [
	    {
		test: /\.s[ac]ss$/i,
		use: [
		    MiniCssExtractPlugin.loader,
		    {
			loader: 'css-loader',
			options: {
			    sourceMap: true,
			    modules: {
				localIdentName: '[path][name]__[local]--[hash:base64:5]'
			    },
			}
		    },
		    {
			loader: 'postcss-loader',
			options: {
			    sourceMap: true,
			    config: {
				path: 'postcss.config.js'
			    }
			}
		    },
		    {
			loader: 'sass-loader',
			options: {
			    sourceMap: true
			}
		    }
		],
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		    'file-loader',
		],
	    },
	    {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: [
		    'file-loader',
		],
	    },
	],
    },
};

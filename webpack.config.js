const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/client/index.html',
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	/*
	 * entry - Dependency tree is built based upon 'import' statements present in this file. 
	 */
	entry: './src/client/index.jsx', 
	
	/*
	 * output - Where and how (??) to save the outputed file from the loaders. 
	 *		    Maybe there could be multiple files outputed.
	 */
	output: {
		path: path.resolve('dist'),
		filename: 'bundle_index.js',
		sourceMapFilename: 'bundle.map'
	},

	/*
	 * devtool - ?? No explanation in this part of book.
	 */
	devtool: '#source-map', // Setting '#source-map' tells webpack to use source mapping

	/*
	 * module - ??? No good explanation in this part of book.
	 */
	module: {
		/*
		 * rules - array of objects. Each object represents a loader that webpack will run.
		 */
		rules: [
			{
				/*
				 * test - which files the loader should operate on.
				 */
				test: /\.js$/,

				/*
				 * exclude - which files that match the 'test' regex that should be excluded.
				 */
				exclude: /(node_modules)/,

				/*
				 * loader - the loader name
				 */ 
				loader: 'babel-loader',
			},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
		]
	},

	/*
	 * plugins - ??? no explanation in this part of book.
	 */
	 plugins: [
	 	HtmlWebpackPluginConfig,


	 // 	new webpack.optimize.UglifyJsPlugin({
	 // 		sourceMap: true, // Flag to create a source map for the uglified output.
	 // 		warnings: false, // Flag to show warnings from exported bundle in the console.
	 // 		mangle: true // Change variable names. (Obfuscate ???)
	 // 	})
	 ]
}






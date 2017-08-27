const ET = require("extract-text-webpack-plugin");
const webpack = require("webpack");


module.exports = {
	entry:__dirname+"/src/News/entry.js",
	output:{
		path:__dirname+"/dist/",
		filename:"[name].js"

	},
	module:{
		loaders:[
			{test:/\.(jpg|png|gif|svg)$/,loader:"url-loader?limit=8192"},
			{test:/\.css$/,loader:"style-loader!css-loader"},
			{test:/\.less$/,loader:"style-loader!css-loader!sass-loader"},
			{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
			{test:/\.js$/,exclude:/node_modules/,loader:"jsx-loader!babel-loader"},
			
		]
	},
	devtool:"soure-map",

	devServer:{
		contentBase:__dirname+"/dist",
		host:"localhost",
		port:8000,
		inline:true,
		hot:true
	},
	plugins:[
	new ET({
		filename:"css/[name].css",
		allChunks:true
	})

	]
} 
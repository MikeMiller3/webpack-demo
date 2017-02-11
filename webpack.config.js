module.exports = {
devtool: 'eval-source-map',
entry: __dirname+"/js/main.js",
output: {
path: __dirname+"/dist",
filename: "bundle.js"
},

//module: 加载器loaders配置
module: {
	loaders: [
		{
			test: /\.json$/,
			loader: 'json-loader'
		},
		{
			test: /\.js$/,
			exclude: '/node_modules/',
			loader: 'babel-loader'
		}，
		{
			test: /\.css$/,
			loader: 'css-loader!style-loader'
		}
	]
},

//devServer: webpack-dev-server配置
devServer: {
	contentBase: __dirname,//本地服务器加载的页面所在目录
	port: '8080',
	inline: true,//源文件改变时自动刷新页面
	historyApiFallback: true,//
	}

}

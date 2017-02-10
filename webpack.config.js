module.exports = {
devtool: 'eval-source-map',
entry: __dirname+"/js/main.js",
output: {
path: __dirname+"/public",
filename: "bundle.js"
},

//module: 加载器loaders配置
module: {
	rules: [
		{
			test: /\.json$/,
			use: 'json-loader'
		},
		{
			test: /\.js$/,
			exclude: 'node_modules',
			use: 'babel-core',
			//query: ['es2015']//支持es6语法
		}
	]
},

//devServer: webpack-dev-server配置
devServer: {
contentBase: 'public',//本地服务器加载的页面所在目录//console输出彩色
port: '8080',
inline: true,//源文件改变时自动刷新页面
historyApiFallback: true,//
}

}

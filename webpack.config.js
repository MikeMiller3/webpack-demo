var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
devtool: 'eval-source-map',
entry: __dirname+"/js/main.js",
output: {
path: __dirname+"/dist",
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
			exclude: '/node_modules/',
			use: 'babel-loader'
		},
		{
			test: /\.scss$/,
			use: [{loader: "css-loader"},{loader: "style-loader"},{loader: "sass-loader"}]
		}
	]
},

plugins: [
  new webpack.BannerPlugin("Copyright flaginfo shanghai."),//在这个数组中new一个就可以了
  new HtmlWebpackPlugin({//自动引入打包后的js文件
      template: __dirname + "/index.tmpl.html"
    }),
  // new webpack.HotModuleReplacementPlugin()//热加载插件TODO
],
//devServer: webpack-dev-server配置
devServer: {
	contentBase: __dirname,//本地服务器加载的页面所在目录
	port: '8080',
	inline: true,//源文件改变时自动刷新页面
	historyApiFallback: true,//
	}

}

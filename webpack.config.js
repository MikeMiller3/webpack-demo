module.exports = {
devtool: 'eval-source-map',
entry: __dirname+"/js/main.js",
output: {
path: __dirname+"/public",
filename: "bundle.js"
},
devServer: {
contentBase: 'public',//本地服务器加载的页面所在目录//console输出彩色
port: '8080',
inline: false,//源文件改变时自动刷新页面
historyApiFallback: true,//
}
}

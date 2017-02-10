# webpack-demo
> webpack 示例
* [参考](http://www.jianshu.com/p/42e11515c10f)

``` bash
npm install
npm build
webpack-dev-server
```

##原理

webpack：
> 将项目作为一个整体，根据项目主文件，遍历其依赖，通过loader编译，然后打包（以减少http请求）
* loader
* 将各种格式的文件转换为js文件，例如typeScript,SASS,JSX，或者将下一代js文件转换为浏览器可识别的js文件。

webpack-dev-server:

> 用express创建一个小型服务器，支持文件改变自动刷新页面

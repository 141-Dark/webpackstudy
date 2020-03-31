const path = require('path');
//在内存中生成HTML页面的插件，他可以根据指定的页面生成一个内存中的页面（用于显示），把打包好的bundle.js追加到页面中，所以html文件中没有必要再引入文件
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),  //入口,main.js所在的绝对路径
    output: {  //出口
        path: path.join(__dirname,'./dist'),  //main.js的输出路径
        filename: 'bundle.js'  //main.js打包后的文件名
    },
    mode: "development",  //开发模式
    devServer: {  //插件,作用是模拟一个服务器，将文件放到服务器环境中运行
        open: true,//自动打开浏览器
        port: 3002,//打开端口

    },
    plugins: [  //插件
        new htmlWebpackPlugin({  //作用：将js文件自动引入index.html
            template: path.join(__dirname,'./src/index.html'), //指定模板页面
            filename: "index.html"//指定生成页面的名称
        }),
        //热更新第三步

    ],
    module : {
        rules: [  //加载器
            {test: /\.css$/, use: ['style-loader','css-loader']},//css加载器，从右往左加载
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},//配置less文件规则
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},//配置sass文件规则
            //limit是给定的值，单位是byte，如果图片大于或等于limit则会被转换为base64字符串
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},//处理图片路径
            {test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},//处理字体
            //{test: /\.js$/, use: 'babel-loader',exclude:/node_moudles/}//浏览器不识别的ES6高级语法
        ]
    }
}
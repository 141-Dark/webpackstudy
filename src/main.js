//无论是import还是const，浏览器都解析不了，所以要通过webpack解析
import $ from 'jquery'
//使用import导入样式,处理非js文件时，要手动安装第三方插件，loader加载器
import './CSS/index.css'
import './CSS/animate.css'
//导入css样式
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
})


/*
* 打包命令 webpack ./src/main.js -o ./dist/bundle.js
*
*package.json的script中添加 "dev":"webpack --mode development"和"bulid":"webapck --mode production"
* 安装webpack和cli：npm i webpack -g    npm i -D webpack webpack-cli
* 安装并是使用webpack-dev-server来实现自动打包
*
* webpack-dev-server帮我们打包生成的bundel.js文件，并没有存放到实际的物理磁盘上，而是直接托管到了电脑内存中，所以在项目根目录中根本找不到bundel.js文件（提高速度，减少消耗磁盘）
*
* 安装cnpm i html-webpack-plugin -D
* 安装cnpm i style-loader css-loader -D
* 在webpack.config.js中添加一个配置节点，叫module
*
* 选择性安装less样式插件：cnpm i less-loader -D
* 选择性安装sass样式插件：cnpm i sass-loader -D    cnpm i node-sass -D
* 安装地址解析器cnpm i url-loader file-loader -D，在webpack.config.js中还要添加匹配规则
* 安装bootstrap   cnpm i bootstrap -S
* 安装图标 npm i open-iconic -S
* 解析浏览器不识别的ES6语法，需要装的两套包，第一套：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
* 第二套：cnpm i babel-preset-env babel-preset-stage-0 -D，还需要添加一个配置文件babel.js
* */

//ES6中实现面向对象编程


//无论是import还是const，浏览器都解析不了，所以要通过webpack解析
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
})
/*
* 打包命令 webpack ./src/main.js -o ./dist/bundle.js
*
*package.json的script中添加 "dev":"webpack --mode development"和"bulid":"webapck --mode production"
* */
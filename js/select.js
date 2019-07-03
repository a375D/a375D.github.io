function myOpen(id) {
    var IDs = ["homediv", "blogdiv", "aboutdiv"]
    for(var i of IDs) {
        if(i == id) {
            document.getElementById(i).style.display="block"
        }
        else
            document.getElementById(i).style.display="none"
    }
}
// setTimeout(()=> {console.log(i)}, i+100):这是一个异步调用，
// 在for循环结束之后才开始返回， 因而所有的i都是10
// var具有变量提升，也即声明被提到了最开始。
// console.log(x); var x = 20; 被换成了 var x; console.log(x); x = 20
// var x = y = 0:这里y是没有被声明的，这时候y被放在全局变量区，可以使用window.y访问
// 'use strict';在函数之初使用严格模式
// 严格模式下011不能表示8进制，应使用0o11
// 非严格相等(==)下null==undefined，而严格下null!==undefined
// 1 && 2 == 2,0 && 2 == 0 (短路特性)
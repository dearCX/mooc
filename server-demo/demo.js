let user = require('./user');
console.log(`username:${user.userName}`);
console.log(`say:${user.say()}`);
let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    //url.parse(req.url)请求url
    //util.inspect()将对象转换成字符串输出，常用于调试
    var reqUrlStr = util.inspect(url.parse(req.url));
    res.end(reqUrlStr);
});
server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器已经运行，请打开浏览器，输入:http://127.0.0.1:3000/来进行访问');
})
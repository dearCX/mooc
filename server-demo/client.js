let http = require('http');
let util = require('util');
let fs = require('fs');
let url = require('url');
http.get("http://www.imooc.com/index/getstarlist",function(res){
    res.setEncoding('utf8');
    let data='';
    res.on("data",(chunk) => data += chunk);
    res.on("end",() => {
        let result = JSON.parse(data);
        console.log('result:'+util.inspect(result));
    })
});

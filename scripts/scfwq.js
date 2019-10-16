//自动上传代码到服务器
var client = require('scp2')
client.scp('./dist', {
    host: '119.29.187.203',
    username: 'root',
    password: 'duxinggj2019!',
    path: '/thinkjs/www/admin'
}, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("上传成功");
    }
})

//腾讯云上传
const glob = require('glob')
const path = require('path')
var tencentyun = require('tencentyun');
var COS = require('cos-nodejs-sdk-v5');
var bucket = 'duxinggj-2018',
    appid = '1251133427',
    userid = '0',
    secretId = 'AKID97qLcfl0JL8fy3uWv62jGZeU5S5WalbC',
    secretKey = 'VCgv1sUs11mKdhX8VeicHitqZ5PVMzOY',
    onceExpired = 0,
    userid = "0"
const isWindow = /^win/.test(process.platform)
let pre = path.resolve(__dirname, '../dist/') + (isWindow ? '\\' : '')
const files = glob.sync(
    `${path.join(
    __dirname,
    '../dist/**/*.?(js|css|map|png|jpg|svg|woff|woff2|ttf|eot)'
  )}`
)
pre = pre.replace(/\\/g, '/')
async function  ushdf(files) {
    files.map(async file => {
        const key = getFileKey(pre, file)
        try {
           var sd_der= await test_up_etr(key, file)
            console.log(sd_der)
        } catch (err) {
            console.log('error', err)
        }
    })
}

function getFileKey(pre, file) {
    if (file.indexOf(pre) > -1) {
        const key = file.split(pre)[1]
        return key.startsWith('/') ? key.substring(1) : key
    }
    return file
}

function test_up_etr(name_e, path, call_back) {

    var cos = new COS({
        SecretId: secretId,
        SecretKey: secretKey,
    });
    return new Promise((resolve, reject) => {
        cos.sliceUploadFile({
            Bucket: 'duxinggj-2018-1251133427',
            Region: 'ap-guangzhou',
            Key: name_e,
            FilePath:path
        }, function (err, data) {
            resolve("https://" + data.Location);
        });
    })

}


ushdf(files)

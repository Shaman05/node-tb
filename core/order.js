/**
 * Created by ChenChao on 2018/1/15.
 * 下单买票
 * cookie 的获取使用PC登录后，在requestHead里获取
 */

var request = require('request');
var j = request.jar();
var cookie = request.cookie('key1=value1');
var url = 'http://www.google.com';
j.setCookie(cookie, url);

request({url: url, jar: j}, function () {
    request('http://images.google.com')
});
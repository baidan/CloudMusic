var https = require('https'); 
var express = require('express');
var request = require('request');
var querystring = require("querystring");
var url = require("url"); 
var cors = require("cors");
var app = express();  
app.use(cors());  
//设置跨域访问  

app.get('/in_theaters', function(req, res) {
	var urls = 'https://api.douban.com/v2/movie/in_theaters';
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});
app.get('/coming_soon', function(req, res) {
	var urls = 'https://api.douban.com/v2/movie/coming_soon';
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});  

app.get('/subject', function(req, res) {
	var urlOption = url.parse(req.url);
	var query = querystring.parse(urlOption.query);
    var id = query.id;
	var urls = 'https://api.douban.com/v2/movie/subject/'+id;
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});
app.get('/content', function(req, res) {
	var urlOption = url.parse(req.url);
	var urls='https://api.imjad.cn/cloudmusic/'+urlOption.search;
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});
app.get('/song', function(req, res) {
	var urlOption = url.parse(req.url);
	var urls='https://api.imjad.cn/cloudmusic/'+urlOption.search;
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});
app.get('/singer', function(req, res) {
	var urlOption = url.parse(req.url);
	var urls='https://api.imjad.cn/cloudmusic/'+urlOption.search;
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});
app.get('/lyric', function(req, res) {
	var urlOption = url.parse(req.url);
	var urls='https://api.imjad.cn/cloudmusic/'+urlOption.search;
	req.pipe(request(urls,function(error,response,body) {})).pipe(res);
});


  
app.listen(8088);  
console.log('Listening on port 8088...'); 
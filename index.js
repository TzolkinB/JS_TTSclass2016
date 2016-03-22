var rp = require('request-promise');
var Moment = require('moment');

function logResponse(resp){
	console.log(resp, new Moment().format("h:mm:ss a"));
};

setInterval(function(){
rp('http://jsonplaceholder.typicode.com/posts/1')
	.then(logResponse)
}, 3000)
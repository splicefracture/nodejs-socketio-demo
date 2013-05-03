// Include http module.
var http = require("http").createServer(handler);
var io = require('socket.io').listen(http);
var client = require('socket.io-client');
var fs = require('fs');

// the port you want to serve data from
http.listen(3000);

// global scope variables
var sum = 0;
var cnt = 0;
var num = 0;

function heartBeat(){
    
    // store heartbeat into global scope
    num += Math.random()*10;
    sum += num;
    cnt++;

	// build local data message to write to the sockets
    var data = {};
    data.avg = sum / cnt;
    data.sum = sum;
    data.num = num;
    
    // write message to the sockets
    io.sockets.emit("message",data);
}

// will execute twice a second
setInterval(heartBeat,500);

// this event will execute every time the
io.sockets.on('connection',function(socket){
    console.log('new connection');
});

function handler (req, res) {
    console.log(__dirname+'/index.html');
    fs.readFile(__dirname + '/index.html',
	function (err, data) {
	    if (err) {
		res.writeHead(500);
		return res.end('Error loading index.html');
	    }
	    res.writeHead(200);
	    res.end(data);
	});
}

/* 
  Module dependencies:
  
  - Express
  - Http (to run Express)
  - Body parser (to parse JSON requests)
  - Underscore (because it's cool)
  - Socket.IO

*/

var express = require("express")
  , app = express()
  , http = require("http").createServer(app)
  , bodyParser = require("body-parser")
  , io = require("socket.io").listen(http)
  , _ = require("underscore");



//Server's port number 
app.set("port", 8080);

//Server's IP address
app.set("ipaddr", "0.0.0.0");

//Tells server to support JSON requests
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('NodeJs is up and running.')

});

io.sockets.on('connection', function (socket) {
    socket.on('news', function (data) {
        socket.emit('news', { content: data.text });
        socket.broadcast.emit('news', { content: data.text});
    });
});


//Start the http server at port and IP defined before
http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running.");
});

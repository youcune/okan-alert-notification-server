var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({
  host : '0.0.0.0',
  port : 8080
});
wss.on('connection', function(ws) {
  setInterval(function() {
    var message = Math.random() < 0.5 ? 'ALERT' : 'OK';
    ws.send(message);
    console.log('sent: ' + message)
  }, 10000);
});

// -------------------------------------------------------------------
// Configuration
// -------------------------------------------------------------------
// 最初の CLI 引数を読む
var watch_file = process.argv[2];

// -------------------------------------------------------------------
// Chokidar
// -------------------------------------------------------------------
var chokidar = require('chokidar').watch(watch_file, {
  persistent: true
});

// -------------------------------------------------------------------
// WebSocket
// -------------------------------------------------------------------
var WebSocketServer = new require('ws').Server;
var server = new WebSocketServer({
  host : '0.0.0.0',
  port : 8080
});

// -------------------------------------------------------------------
// Main Process
// -------------------------------------------------------------------
server.on('connection', function(ws) {
  console.log('CONNECTED');
  chokidar
    .on('add',    function (path) { console.log('ADDED');    send_message(ws, 'ALERT'); })
    .on('unlink', function (path) { console.log('UNLINKED'); send_message(ws, 'OK');    })
  ;
});

function send_message (ws, message) {
  ws.send(message);
}

var net = require('net');
var date = require('strftime');

server = net.createServer(function (socket) {
  socket.write(date('%Y-%m-%d %H:%M\n'));
  socket.end();
});

if(process.argv[2]==undefined){
  console.log("");
}else{
  server.listen(Number(process.argv[2]));
}

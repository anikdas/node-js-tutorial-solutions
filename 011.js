var http = require('http');
var fs = require('fs');

server = http.createServer(function (req,response) {
  var readStream = fs.createReadStream(process.argv[3]);
  readStream.on('open', function () {
    readStream.pipe(response);
  })
});
server.listen(Number(process.argv[2]));

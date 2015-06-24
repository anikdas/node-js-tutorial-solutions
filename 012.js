var http = require('http');
var fs = require('fs');
var map = require('through2-map');

server = http.createServer(function (req,response) {
  if(req.method=='POST'){
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});
server.listen(Number(process.argv[2]));

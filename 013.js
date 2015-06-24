var http = require('http');
var fs = require('fs');
var url = require('url');
var date = require('strftime');

server = http.createServer(function (req,response) {
  parsedUrl = url.parse(req.url,true);
  if(parsedUrl.pathname=='/api/parsetime'){
    var new_date =  date('%k %M %S',new Date(parsedUrl.query.iso));
    var arr = new_date.trim().split(' ');
    var new_json = {
      "hour": Number(arr[0]),
      "minute": Number(arr[1]),
      "second": Number(arr[2])
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(new_json));
  }

  if(parsedUrl.pathname=='/api/unixtime'){
    var new_date = new Date(parsedUrl.query.iso);
    var new_json = {
      "unixtime": new_date.getTime()
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(new_json));
  }
  response.end();
});
server.listen(Number(process.argv[2]));

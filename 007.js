var http = require('http');
http.get(process.argv[2],function(res) {
  res.setEncoding('utf8');
  res.on('data',function (data) {
    console.log(data);
  })

  res.on('error',function (err) {
    console.log(err);
  });

  res.on('end',function (data) {
    return;
  });
}).on('error',function (err) {
  console.log(err);
})

var http = require('http');
var bufferList = require('bl');
bl = new bufferList();


http.get(process.argv[2],function(res) {
  res.on('data',function (data) {
    bl.append(data)
  })

  res.on('error',function (err) {
    console.log(err);
  });

  res.on('end',function (data) {
    console.log(bl.length);
    console.log(bl.toString('utf8'));
    return;
  });
}).on('error',function (err) {
  console.log(err);
})

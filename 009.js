var http = require('http');
var bufferList = require('bl');

var arr = [];
var count =0;

function getMeThingsFrom(url,priority,cb) {
  var bl = new bufferList();
  http.get(url,function(res) {
    res.setEncoding('utf8');
    res.on('data',function (data) {
      bl.append(data)
    })

    res.on('error',function (err) {
      console.log(err);
    });

    res.on('end',function (data) {
      arr[priority] = bl.toString('utf8');
      cb();
      return;
    });
  }).on('error',function (err) {
    console.log(err);
  });
};

function callback() {
  ++count;
  if(count==3){
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

getMeThingsFrom(process.argv[2],0,callback);
getMeThingsFrom(process.argv[3],1,callback);
getMeThingsFrom(process.argv[4],2,callback);

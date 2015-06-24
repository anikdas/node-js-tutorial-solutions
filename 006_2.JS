var ls = require('./006_1.js');

ls(process.argv[2],process.argv[3],function (err,data) {
  if(err){
    console.error(err);
    return;
  }
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
})

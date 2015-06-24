var fs = require('fs');
var path = require('path');

function callback(error,list) {
  if(error){
    console.error(error);
    return false;
  }
  for (var i = 0; i < list.length; i++) {
    if(path.extname(list[i])===('.'+process.argv[3])){
      console.log(list[i]);
    }
  }
};
fs.readdir(process.argv[2],callback);

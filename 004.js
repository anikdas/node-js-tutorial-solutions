var fs = require('fs');


function callback(error, data) {
  if(error){
    console.error(error);
    return false;
  }
  console.log(data.toString().split('\n').length-1);
}

fs.readFile(process.argv[2],callback);

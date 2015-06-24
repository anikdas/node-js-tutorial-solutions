var fs = require('fs');
var buff = fs.readFile(process.argv[2],callback);
console.log(buff.toString().split('\n').length-1);

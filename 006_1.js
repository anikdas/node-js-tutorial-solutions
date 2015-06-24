var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir,function (error,list) {
    if(error){
      callback(error);
      return false;
    }
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if(path.extname(list[i])===('.'+ext)){
        arr.push(list[i]);
      }
    }
    callback(null,arr);
  });
};

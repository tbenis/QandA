var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

var dbURI = 'mongodb://localhost/QandA';
mongoose.connect(dbURI);

mongoose.Promise = global.Promise;
var models_path = path.join(__dirname, '../models');
// reuire <singular model names below>

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file)
  }
});

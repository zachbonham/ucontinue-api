
/**
 * Module dependencies.
 */

var express = require('express') 
  , http = require('http')
  , fs = require('fs')
  , routes = require('./routes')
  , stories = require('./routes/stories.js');



var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});



app.get('/', routes.index);
app.get('/stories', stories.list);
app.get('/stories/:id', stories.load);

app.post('/stories', stories.create);
app.post('/stories/:id/continuations', stories.append);



/*
module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file) {
        
        var name = file.substr(0, file.indexOf('.'));
        require('./routes' + name)(app);
    });
}
*/



var port = process.env.PORT || 3000;

http.createServer(app).listen(port);

console.log("Express server listening on port: " + port);

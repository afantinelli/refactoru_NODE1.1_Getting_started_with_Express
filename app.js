
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
//var fs = require('fs')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
        fs.readFile(__dirname + '/index.html', function(err, data){
                res.setHeader('Content-Type', 'text/html')
                res.send(data)
        })
});

//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(data){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/hi', function(req, res){
        res.send('<h1>Ola Amigo!</h1>')
})


app.get('/obrigado', function(req, res){
        res.send('<h2>Thank You!</h2>')
})

app.get('/baseball', function(req, res){
        res.send('<h3>Go Red Sox!</h3>')
})

app.post('/formsubmit', function(req, res){
        res.redirect('/hi')
})

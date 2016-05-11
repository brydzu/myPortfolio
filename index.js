var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./models/Book.model')
var myDB = 'mongodb://antracks:jaydas12@ds049651.mlab.com:49651/blog'
mongoose.connect(myDB);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});
app.get('/calculator', function(request, response) {
    response.render('pages/calculator');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

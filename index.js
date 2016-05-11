var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var PostModel = require('./models/Post.model');
var myDB = 'mongodb://antracks:jaydas12@ds025409.mlab.com:25409/testing12';
mongoose.connect(myDB, function() {
    console.log(mongoose.connection.readyState);
});

var indexRoutes = require('./routes/index');
var blogRoutes = require('./routes/blog');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', indexRoutes);
app.use('/blog', blogRoutes);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

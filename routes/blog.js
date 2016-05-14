var express = require('express');
var router = express.Router();
var PostModel = require('../models/Post.model');

router.get('/', function(request, response) {
    PostModel.find({}, function(err, docs) {
        if (!err) {
            // console.log('This that shit' + docs);
            // process.exit();
            response.render('pages/blog', {
                allpost: docs
            });
        } else {
            throw err;
        }
    });


});

router.get('/:id', function(request, response) {
    PostModel.find({ _id: request.params.id }, function(err, docs) {
        if (!err) {
            console.log('This that shit' + docs);
            // process.exit();
            response.render('pages/single', {
                allpost: docs
            });
        } else {
            throw err;
        }
    });


});

router.post('/post', function(request, response) {

    console.log(request.body.title + ' ' + request.body.content + ' ' + request.body.category + ' ');

    var Post = new PostModel({
        title: request.body.title,
        content: request.body.content,
        category: request.body.category,
        published: true
    });

    Post.save(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('save: ' + data);
            response.redirect('/blog');
        }
    });
});


module.exports = router;

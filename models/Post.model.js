'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author: {
        type: String
    }
});

module.exports = mongoose.model('Post', PostSchema);

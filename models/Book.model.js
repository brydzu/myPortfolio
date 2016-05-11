'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    published: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author: {
        type: String
    },
    //embedded sub documents
    detai: {
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
})

module.exports = mongoose.model('Book', BookSchema);

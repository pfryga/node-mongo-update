var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
    "use strict";

    if(err) throw err;

    console.log('Connected to database!');

    var posts = db.collection('posts');

    posts.find({ 'permalink': 'bjdgkubdbesvrgkvvelt' }).toArray(function (err, items) {
        posts.update({ _id: items[0]._id }, { $set: { author: 'test123'} }, function (err, result) {
            console.log(result);
        });
    });
});

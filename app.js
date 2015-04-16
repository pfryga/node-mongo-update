var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
    "use strict";

    if(err) throw err;

    console.log('Connected to database!');

    var posts = db.collection('posts');

    // 1
    posts.find({ 'permalink': 'bjdgkubdbesvrgkvvelt' }).toArray(function (err, items) {
        posts.update({ _id: items[0]._id }, { $set: { author: 'test123' } }, function (err, result) {
        });
    });

    // 4
    posts.find({ 'permalink': 'qxwtfjbwerrwdmiiztgd' }).toArray(function (err, items) {
        for (var i; i < items[0].comments.length; i++) {
            posts.update({ comments: i }, { $set: { body: 'test123'} }, { multi: true }, function (err, result) {

            });
        }
    });
});

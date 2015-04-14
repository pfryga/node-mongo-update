var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
    "use strict";

    if(err) throw err;

    console.log('Connected to database!');
});

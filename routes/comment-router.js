// 'use strict'
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var Comment = require('./model/comments');
//
// var app = express();
// var router = express.Router();quire('./model/comments');
//
//
// router.get('/', function(req, res) {
//   res.json({ message: 'API Initialized!'});
// });
//
// //adding the /comments route to our /api router
// router.route('/comments')
//   //retrieve all comments from the database
//   .get(function(req, res) {
//     //looks at our Comment Schema
//     Comment.find(function(err, comments) {
//       if (err)
//         res.send(err);
//       //responds with a json object of our database comments.
//       res.json(comments)
//     });
//   })
//   //post new comment to the database
//   .post(function(req, res) {
//     var comment = new Comment();
//     //body parser lets us use the req.body
//     comment.author = req.body.author;
//     comment.text = req.body.text;
//
//     comment.save(function(err) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Comment successfully added!' });
//     });
//   });

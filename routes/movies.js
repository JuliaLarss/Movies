var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var MovieModel = require('../models/MovieModel.js');

// GET
router.get('/', function(req, res, next) {
  MovieModel.find(function (err, movie) {
    if (err) return next(err);
      else {
        res.json(movie);
        }
    });
  });

// POST
router.post('/', function(req, res, next) {
  MovieModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post); 
    });
});

// DELETE
router.delete('/:id', function(req, res, next) {
  MovieModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    });
});

// UPDATE
router.post('/:id', function(req, res, next) {
  MovieModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    });
});

module.exports = router;

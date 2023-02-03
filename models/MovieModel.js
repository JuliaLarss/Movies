var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
Title: 'string',
Lead_Actor: 'string',
Length: 'string',
},
{
collection: 'movies'
});

module.exports = mongoose.model('MovieModel', MovieSchema);
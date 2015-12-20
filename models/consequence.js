var mongoose = require('mongoose');

var consequenceSchema = mongoose.Schema({
  // ...
});

var Consequence = mongoose.model('Consequence', consequenceSchema);
module.exports = Consequence;
var mongoose = require('mongoose');

var conditionSchema = mongoose.Schema({
  // ...
});

var Condition = mongoose.model('Condition', conditionSchema);
module.exports = Condition;
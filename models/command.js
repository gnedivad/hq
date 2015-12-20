var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var commandSchema = mongoose.Schema({
  active: Boolean,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  condition: { type: ObjectId, ref: 'Condition' },
  consequence: { type: ObjectId, ref: 'Consequence' },
  user: { type: ObjectId, ref: 'User' }
});

var Command = mongoose.model('Command', commandSchema);
module.exports = Command;
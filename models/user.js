var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
  name: String,
  commands: [{ type: ObjectId, ref: 'Command' }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
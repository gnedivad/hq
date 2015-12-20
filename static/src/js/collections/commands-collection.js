var Backbone = require('backbone');

var Command = require('../models/command');

var Commands = Backbone.Collection.extend({
  url: function() {
    return '/api/users/' + this._id + '/commands';
  },
  idAttribute: '_id',
  initialize: function(options) {
    this._id = options._id;
  },
  model: Command
});

module.exports = Commands;
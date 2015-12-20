var Backbone = require('backbone');

var Command = Backbone.Model.extend({
  urlRoot: '/api/commands',
  initialize: function() {
    // ...
  },
  defaults: {
    active: true
  }
});

module.exports = Command;
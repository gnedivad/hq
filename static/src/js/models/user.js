var Backbone = require('backbone');

var Commands = require('../collections/commands-collection');

var User = Backbone.Model.extend({
  urlRoot: '/api/users',
  idAttribute: '_id',
  defaults: function() {
    return {
      firstname: '',
      lastname: '',
      avatarUrl: '',
    }
  },
  initialize: function(options) {
    this._id = options._id;

    if (!this.commands) {
      this.commands = new Commands({ _id: this._id });
    }

    var that = this;
    that.commands.on('sync', function() {
      that.trigger('change', that);
    });
  }
});

module.exports = User;
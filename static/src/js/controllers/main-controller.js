var User = require('../models/user');
var MainIndexView = require('../views/main/index.jsx');

var MainController = function(options) {
  var app = options.app;

  return {
    index: function() {
      var user = new User({ _id: 1 });
      user.fetch().done(function() {
        user.commands.fetch().done(function() {
          var view = new MainIndexView({
            user: user,
            commands: user.commands,
            el: $('#app')
          });
          view.render();
        })
      });
    }
  }
}

module.exports = MainController;
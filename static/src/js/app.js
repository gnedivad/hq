var Backbone = require('backbone');

var Router = require('./router');
var MainIndexView = require('./views/main/index.jsx');
var MainController = require('./controllers/main-controller');

Backbone.$ = $;

var Application = function() {
  this.initialize();
};

Application.prototype.initialize = function() {
  this.controllers = {
    main: new MainController({ app: this })
  };
  this.router = new Router({
    app: this,
    controllers: this.controllers
  });
  Backbone.history.start({ pushState: true });
  this.router.navigate('index', true);
};

module.exports = Application;
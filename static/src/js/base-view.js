var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var BaseView = Backbone.View.extend({
  initialize: function (options) {
    this.options = options || {};
  },
  component: function () {
    return null;
  },
  render: function () {
    ReactDOM.render(this.component(), this.el);
    return this;
  }
});

module.exports = BaseView;
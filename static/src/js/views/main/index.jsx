var Backbone = require('backbone');
var React = require('react');

var BaseView = require('../../base-view');
var MainComponent = require('./main-component.jsx');

var MainIndexView = BaseView.extend({
  component: function() {
    console.log('in views/main/index.jsx');
    console.log(this.options);
    return <MainComponent commands={this.options.commands} />;
  }
});

module.exports = MainIndexView;
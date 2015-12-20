var BackboneReactMixin = require('backbone-react-component');
var React = require('react');

var CommandsList = require('./commands-list.jsx');

var MainComponent = React.createClass({
  mixins: [BackboneReactMixin],
  render: function() {
    return (
      <div id="main-container">
        <CommandsList commands={this.props.commands} />
      </div>
    );
  }
});

module.exports = MainComponent;
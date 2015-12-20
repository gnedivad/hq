var BackboneReactMixin = require('backbone-react-component');
var React = require('react');
var CommandDetail = require('./command-detail.jsx');

var CommandsList = React.createClass({
  mixins: [BackboneReactMixin],
  render: function() {
    console.log('in views/main/commands-list.jsx');

    var commandsList = this.props.commands.map(function(command) {
      return <CommandDetail command={command} />
    });

    return (
      <div className="commands-list">
        {commandsList}
      </div>
    );
  }
});

module.exports = CommandsList;
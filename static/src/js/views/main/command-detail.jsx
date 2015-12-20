var BackboneReactMixin = require('backbone-react-component');
var React = require('react');

var CommandDetail = React.createClass({
  mixins: [BackboneReactMixin],
  render: function() {
    var command = this.props.command;

    var active = command.get('active');
    var condition = command.get('condition');
    var consequence = command.get('consequence');
    var created = command.get('created');
    var updated = command.get('updated');
    var owner = command.get('owner');
    
    return (
      <div className="command-detail">
        <p>Active: {active}</p>
        <p>Condition: {condition}</p>
        <p>Consequence: {consequence}</p>
        <p>Created: {created}</p>
        <p>Updated: {updated}</p>
        <p>Owner Name: {owner.firstname} {owner.lastname}</p>
        <p>Owner Avatar: {owner.avatarUrl}</p>
      </div>
    )
  }
});

module.exports = CommandDetail;
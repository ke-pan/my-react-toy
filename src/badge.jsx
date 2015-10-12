var React = require('react')
var Badge = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
      {this.props.title} <span className="badge">{this.props.number + 1}</span>
    </button>
  }
});

module.exports = Badge

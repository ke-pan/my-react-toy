var React = require('react');

module.exports = React.createClass({
  handleClick: function(){
    this.props.whenClicked(this.props.listTitle)
  },
  render: function() {
    return <li className={this.props.className}>
            <a onClick={this.handleClick} href="#">{this.props.listTitle}</a>
          </li>
  }
})

var React = require('react')
var Button = require('./button.jsx')
var ListItem = require('./list-item.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return {open: false}
  },
  handleClick: function() {
    // console.log("clicked")
    this.setState({
      open: !this.state.open
    })
  },
  handleListClick: function(item) {
    this.setState({
      title: item,
      open: false
    })
  },
  render: function(){
    const list = this.props.fruits.map(fruit => {
      return <ListItem
              listTitle={fruit}
              whenClicked={this.handleListClick}
              className={this.state.title == fruit ? "active" : ""}
            />
    }.bind(this))
    return <div className="dropdown">
      <Button
        className="btn-default"
        buttonTitle={this.state.title || this.props.title}
        subTitleClass="caret"
        whenClicked={this.handleClick}
      />
    <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
        {list}
      </ul>
    </div>
  }
})

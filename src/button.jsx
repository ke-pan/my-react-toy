var React = require('react')

module.exports = React.createClass({
  handleClick: function() {
    // console.log('clicked button')
    this.props.whenClicked()
  },
  render: function() {
    return <button className={"btn " + this.props.className} type="button"
            onClick={this.handleClick}>
              {this.props.buttonTitle}
              <span className={this.props.subTitleClass}>{this.props.subTitle}</span>
           </button>
  }
})

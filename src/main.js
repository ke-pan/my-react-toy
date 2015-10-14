var React = require('react')
var Dropdown = require('./dropdown.jsx')

var options = {
  title: "select a fruit",
  fruits: [
    "Apple",
    "Pear",
    "Peach"
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//var Router = require('react-router').Route;

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);

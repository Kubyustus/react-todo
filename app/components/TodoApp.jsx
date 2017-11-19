var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'clean the car'
        }, {
          id: 3,
          text: 'make laundry'
        }, {
          id: 4,
          text: 'read book'
        }
      ]
    };
  },
  HandleAddTodo: function (text) {
    alert('new todo: ' + text)
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.HandleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;

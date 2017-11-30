var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on HandleAddTodo', () => {
    var todoText = 'test text todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.HandleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});
    //check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    //call handleToggle with 11
    todoApp.handleToggle(11);

    //Verify that value of completed has changed to true
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  //test that when toggle from true to false , completedAt get removed
  it('should remove completedAt when toggling completed value from true to false', () => {
    var todoData = {
      id: 12,
      text: 'Test features2',
      completed: true,
      createdAt: 500,
      completedAt: 510
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    //call handleToggle with 11
    todoApp.handleToggle(12);

    // expect completedAt to be undefined
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});

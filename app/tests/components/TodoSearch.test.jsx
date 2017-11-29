var expect = require('expect');
var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch if valid search value entered', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todosearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    var showCompletedValue = true;
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    //var $el = $(ReactDom.findDOMNode(todosearch));

    todosearch.refs.showCompleted.checked = showCompletedValue;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(showCompletedValue, '');
  });

});

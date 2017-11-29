var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" refs="completed" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;

import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    const completed = this.props.todo.completed;
    return {
      background: "#212121",
      color: "#fff",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  render() {
    const id = this.props.todo.id;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {this.props.todo.title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={buttonStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

// Prop-types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const buttonStyle = {
  background: "#d50000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;

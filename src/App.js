import React from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Kramas",
        completed: false,
      },

      {
        id: 2,
        title: "Rasta hunden",
        completed: false,
      },

      {
        id: 3,
        title: "Äta något",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  // Delete todo
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      const isDeletedTodo = todo.id === id;
      return !isDeletedTodo;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <Todos
        todos={this.state.todos}
        markComplete={this.markComplete}
        deleteTodo={this.deleteTodo}
      />
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
import "./App.css";
import About from "./components/pages/About";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Kramas",
        completed: false,
      },

      {
        id: uuid(),
        title: "Rasta hunden",
        completed: false,
      },

      {
        id: uuid(),
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

  // Addd Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

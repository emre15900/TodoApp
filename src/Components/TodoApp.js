import React, { Component } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default class TodoApp extends Component {
  state = {
    tasks: [
      { id: 1, name: "tasks1", done: false },
      { id: 2, name: "tasks2", done: false },
    ],
  };
  render() {
    return <div>
        <Todo />
        <TodoList tasks={this.state.tasks} />
    </div>;
  }
}

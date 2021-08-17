import React, { Component } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default class TodoApp extends Component {
  state = {
    tasks: [
      { id: 1, name: "tasks1", done: false },
      { id: 2, name: "tasks2", done: false },
    ],
  };

  addTodo = (newInput) => {
        if(newInput === ""){
            alert("No Task!")
        }
        else if(this.state.tasks.find(tasks=>tasks.name === newInput)){
            alert("You have this Task!")
        }
        else{
            const newTask = {
                id: uuidv4(),
                name: newInput,
                done: false
            }
            this.setState({
                tasks: [...this.state.tasks,newTask]
            })
        }
  }

  removeTodo = (name) => {
        const filtered = this.state.tasks.filter(task=>task.name!==name)
        this.setState({
            tasks: filtered
        })
    }

  render() {
    return <div>
        <Todo addTodo={this.addTodo} />
        <TodoList 
        removeTodo={this.removeTodo} 
        tasks={this.state.tasks} />
    </div>;
  }
}

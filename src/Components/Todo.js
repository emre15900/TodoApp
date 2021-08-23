import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    input: "",
  };

  changeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  
  submitHandler = (e) => {
    this.props.addTodo(this.state.input);
    this.setState({
      input: "",
    });
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

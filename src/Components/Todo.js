import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    input: "",
  };
  changeHandler=(e)=>{
      this.setState({
          input: e.target.value
      })
  }
  render() {
    return (
      <form>
        <input
          onChange={this.changeHandler}
          value={this.state.value}
          type="text"
        />
        <button>Add</button>
      </form>
    );
  }
}

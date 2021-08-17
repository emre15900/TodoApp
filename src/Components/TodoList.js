import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.tasks.map(task => {
                        return(
                            <div key={task.id} >
                                <li 
                                className={task.done ? "done" : ""}
                                onClick={()=>this.props.drawTodo(task.name)} >{task.name}</li>
                                <button onClick={()=> this.props.removeTodo(task.name)} >Delete</button>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}

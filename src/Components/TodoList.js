import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.tasks.map(tasks => {
                        return(
                            <div key={tasks.id} >
                                <li>{tasks.name}</li>
                                <button>Delete</button>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}

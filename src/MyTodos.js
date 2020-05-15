import React, { Component } from 'react'
import request from 'superagent'
import AddTask from './AddTask.js'

export default class MyTodos extends Component {
    state = {
        tasks: [],
        token: localStorage.getItem('TOKEN') 
    }
    componentDidMount = async() => {
        const tasks = await request
        .get('https://shielded-island-64257.herokuapp.com/api/todos')
        .set("Authorization", this.props.token)
        this.setState({ tasks: tasks.body })
    }

    render() {
        return (
            <div>
                <AddTask token={this.state.token} />
                {
                this.state.tasks.map(task => <li onClick={() => this.handleClick(task.id)} 
                key={JSON.stringify(task)}>
                {task.task}
            </li>)
          }
            </div>
        )
    }
}

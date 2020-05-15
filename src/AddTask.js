import React, { Component } from 'react'
import request from 'superagent'

export default class AddTask extends Component {
    state ={
        task: '',
        priority_level: 0 
    }

    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        console.log(this.state, 'hello')
        await request
        .post('https://shielded-island-64257.herokuapp.com/api/todos', this.state)
        .set("Authorization", this.props.token);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='task'></input>
                    <input onChange={this.handleChange} name='priority_level' type='number'></input>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import request from 'superagent'

export default class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let token = await request.post('https://shielded-island-64257.herokuapp.com/api/auth/signin', this.state);
        this.props.handleTokenChange(token.body.token);
        this.props.history.push('./todos');
    }

    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        EMAIL
                        <input name='email' onChange={this.handleChange}></input>
                    </label>
                    <label>
                        PASSWORD
                        <input name='password' onChange={this.handleChange}></input>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

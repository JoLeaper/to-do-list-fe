import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import SignUpPage from './SignUpPage.js'
import SignInPage from './SignInPage.js'
import MyTodos from './MyTodos.js'
import PrivateRoute from './PrivateRoute.js'
import './App.css'

export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN')
  }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken })
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
            <ul>
            { this.state.token && <Link to="/todos">To Do List</Link>}
          <li><Link to="/signin">Sign-In</Link></li>
          <li><Link to="/signup">Sign-Up</Link></li>
          <button onClick={() => this.handleTokenChange('')}>Log Out</button>
            </ul>
      <Switch>
            <Route 
              path="/signup"
              exact
              render= {(routerProps) => <SignUpPage 
                handleTokenChange={this.handleTokenChange}
                {...routerProps} />}
            />
            <Route 
              path="/signin"
              exact
              render= {(routerProps) => <SignInPage 
                handleTokenChange={this.handleTokenChange}
                {...routerProps} />}
            />
            <PrivateRoute 
              path="/todos"
              exact
              token={this.state.token}
              render= {(routerProps) => <MyTodos {...routerProps} />}
            />
        </Switch>
      </div>
    )
  }
}

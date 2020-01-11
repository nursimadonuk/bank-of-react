import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      accountBalance: 14568.27
    }
  }
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

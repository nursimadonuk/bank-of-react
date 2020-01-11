import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from './Components/Login'
import Debits from './Components/Debits'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }
  }

  mockLogin = (loginInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = loginInfo.userName
    this.setState({currentUser: newUser})
  }

  debitData = () => {
    axios.get("https://moj-api.herokuapp.com/debits")
    .then(response => this.setState({data: response}))
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>
      );
    const DebitsComponent = () => (
      <Debits data={this.debitData}/>
    )
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

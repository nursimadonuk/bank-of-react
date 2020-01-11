import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from 'Login'


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

  mockLogin = () => {
    const newUser = {...this.state.currentUser}
    newUser.userName = loginInfo.userName
    this.setState({currentUser: newUser})
  }

  //const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>)
  //<Route exact path='/login' render={LogInComponent}/>
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import {Link, Redirect} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
                <h1>Bank of React</h1>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/debits">Debit</Link>
                <Link to="/cebits">Credit</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        )
    }
}

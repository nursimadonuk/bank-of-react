import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            redirect: false
        }
    }

    handleChange = (event) => {
        const updateedUser ={...this.state.user}
        const inputField = event.target.name
        const inputValue = event.target.value 
        updatedUser[inputField] = inputValue
        this.setState({user: updatedUser})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({redirect: true})
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to="/userProfile"/>)
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

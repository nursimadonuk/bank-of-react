import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Debits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRedirect: true,
            data: []
        }
    }

    // handleClick = () => {
    //     this.setState({isRedirect: true})
    // }

    determineDisplay = () => {
        if(!this.isRedirect) {
            return null;
        }else {
            return(
                <div>
                    {this.data.map((element) => {
                        return(
                            <div>
                                <p>Debit description: {element.description}</p>
                                <p>Debit amount: {element.amount}</p>
                                <p>Debit date: {element.date}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
        let display = this.determineDisplay();
        return (
            <div>
                <h1>Debits</h1>
                {display}
                <Link to="/">Home Page</Link>
            </div>
        )
    }
}

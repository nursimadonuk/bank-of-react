import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Debits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    determineDisplay = () => {
        if(this.props.data) {
            return(
                <div>
                    {this.props.data.map((element) => {
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
        }else{
            return null;
        }

    }

    render() {
        let display = this.determineDisplay();
        console.log(this.props.data);
        return (
            <div>
                <h1>Debits</h1>
                {display}
                <Link to="/">Home Page</Link>
            </div>
        )
    }
}

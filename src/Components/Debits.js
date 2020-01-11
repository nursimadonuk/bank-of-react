import React, { Component } from 'react'
import axios from 'axios'

export default class Debits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRedirect = false,
            data = []
        }
    }

    handleClick = () => {
        this.setState({isRedirect: ture})
        axios.get("https://moj-api.herokuapp.com/debits")
        .then(response => this.setState({data: response}))
    }

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
        let display = determineDisplay();
        return (
            <div>
                <h1>Debits</h1>
                <button onClick={this.handleClick}>Display</button>
                {display}
            </div>
        )
    }
}

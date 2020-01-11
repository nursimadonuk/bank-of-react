import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Credits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datac: []
        }
    }

    determineDisplay = () => {
        if(this.props.datac) {
            return(
                <div>
                    {this.props.datac.map((element) => {
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
        console.log(this.props.datac);
        return (
            <div>
                <h1>Credits</h1>
                {display}
                <Link to="/">Home Page</Link>
            </div>
        )
    }
}

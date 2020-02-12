import React, { Component } from "react";
import SignIn from "DevOpsMetrics";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event => {
        // Do Stuff
    }

    render() {
        return (
            <div className="Login">
                <SignIn onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="Message">
                <h1>{this.props.msg}</h1>
            </div>
        );
    }
}

export default Message;

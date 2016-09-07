import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <button onClick={this.props.onRestart}>Restart</button>
            </div>
        );
    }
}

export default Controls;

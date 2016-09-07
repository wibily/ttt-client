import React, {Component} from 'react';

class Cell extends Component {

  render() {
    if (this.props.symbol) {
      return (
        <span className="Cell Cell--filled">
        {this.props.symbol}
      </span>
      );
    }

    return (
      <span className="Cell Cell--empty" onClick={this.props.onClick}> </span>
    );
  }
}

export default Cell;

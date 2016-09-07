import React, {Component} from 'react';
import Cell from './Cell';

class Game extends Component {

  renderRow(row, rowIndex) {
    return <div className="Game__row">{row.map((cell, colIndex)=>{
      return this.renderCell(cell, rowIndex, colIndex);
    })}</div>;
  }

  renderCell(cell, rowIndex, colIndex) {
    let symbol;

    if(cell){
      if(cell === 1){
        symbol = 'X';
      } else if(cell === 2){
        symbol = 'O';
      }
    }

    return <Cell symbol={symbol} onClick={this.props.onSubmit.bind(this, rowIndex, colIndex)}></Cell>
  }

  render() {
    return (
      <div className="Game">
        <div className="Game__table">
          {this.props.board.map((row,i) => {
            return this.renderRow(row,i);
          })}
        </div>
      </div>
    );
  }
}

export default Game;

import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

import Message from './Message';
import Game from './Game';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }

  componentDidMount() {
    $.get('http://localhost:3001/game', (result)=> {
      this.setState(result);
    });
  }

  extractMessage(state) {
    if (state.winner) {
      return `Game won by player ${state.winner}`;
    } else if (state.draw) {
      return `Game is a Draw`;
    } else if (state.player) {
      return `Player ${state.player}'s turn`;
    } else {
      return 'Loading...';
    }
  }

  playSquare(x,y){
    $.ajax('http://localhost:3001/game/move',{
      data : JSON.stringify({
        move:[x,y]
      }),
      contentType : 'application/json',
      type : 'POST'
    }).done((data)=>{
      this.state = null;
      this.setState(data);
    });
  }

  restart(){
    $.get('http://localhost:3001/game/restart', (result)=> {
      this.state = null;
      this.setState(result);
    });
  }

  render() {
    return (
      <div className="App">
        <Message msg={this.extractMessage(this.state)}/>
        <Game board={this.state.board} onSubmit={this.playSquare.bind(this)}/>
        <Controls onRestart={this.restart.bind(this)}/>
      </div>
    );
  }
}

export default App;

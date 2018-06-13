import React from 'react';

export default class TicTacToe extends React.Component {
state = {
    turn: '',
    clicked: false,
    
  }

   playerTurn() {
      let changeTurn = '';
      if(changeTurn === 'X' ? changeTurn = 'O' : changeTurn = 'X'){
        this.setState({turn: changeTurn});
      }
    }

  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={()=> this.playerTurn()}></div>
          <div data-cell="1" onClick={()=> this.playerTurn()}></div>
          <div data-cell="2" onClick={()=> this.playerTurn()}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={()=> this.playerTurn()}></div>
          <div data-cell="4" onClick={()=> this.playerTurn()}></div>
          <div data-cell="5" onClick={()=> this.playerTurn()}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={()=> this.playerTurn()}></div>
          <div data-cell="7" onClick={()=> this.playerTurn()}></div>
          <div data-cell="8" onClick={()=> this.playerTurn()}></div>
        </div>
      </div>
    );
  }
}

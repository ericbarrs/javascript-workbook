import React from 'react';

export default class TicTacToe extends React.Component {
state = {
    turn: 'X',
    board: Array(9).fill(''),
    Win: false,
    Tie: false,
    Moves: 0,
  }

   handleClick(event){
      Moves: this.state.Moves ++
      if ( this.state.board[event.target.dataset.cell] === ''){
         this.state.board[event.target.dataset.cell] = this.state.turn
         event.target.innerText = this.state.turn;
       }
      this.win()
    }


    win(){
      if(
        this.state.board[0] === this.state.turn && this.state.board[1] === this.state.turn  && this.state.board[2] === this.state.turn ||
        this.state.board[3] === this.state.turn && this.state.board[4] === this.state.turn  && this.state.board[5] === this.state.turn ||
        this.state.board[6] === this.state.turn && this.state.board[7] === this.state.turn  && this.state.board[8] === this.state.turn ||
        this.state.board[0] === this.state.turn && this.state.board[3] === this.state.turn  && this.state.board[6] === this.state.turn ||
        this.state.board[1] === this.state.turn && this.state.board[4] === this.state.turn  && this.state.board[7] === this.state.turn ||
        this.state.board[2] === this.state.turn && this.state.board[5] === this.state.turn  && this.state.board[8] === this.state.turn ||
        this.state.board[0] === this.state.turn && this.state.board[4] === this.state.turn  && this.state.board[8] === this.state.turn ||
        this.state.board[2] === this.state.turn && this.state.board[4] === this.state.turn  && this.state.board[6] === this.state.turn
        ){
          this.setState({
            Win: true,
          })
        }else if(this.state.Moves >= 9 && this.state.Win === false){
          this.setState({Tie: true})
        }else{
          this.playerTurn()
        }
      }
      playerTurn(){
        if (this.state.Win === false && this.state.Tie === false){
           this.setState({
           turn: this.state.turn === 'X' ? 'O' : 'X',
           board: this.state.board
          })
      }
    }

        restartButton(event){
          this.setState({
            turn: 'X',
            board: Array(9).fill(''),
            Win: false,
            Tie: false,
            Moves: 0,
          })
        }



  render() {
    if(this.state.Win === false){
    return (
      <div className='board' onClick={(e)=>this.handleClick(e)} onChange={()=>this.win()}>
        <div className="row">
          <div data-cell="0"></div>
          <div data-cell="1"></div>
          <div data-cell="2"></div>
        </div>
        <div className="row">
          <div data-cell="3"></div>
          <div data-cell="4"></div>
          <div data-cell="5"></div>
        </div>
        <div className="row">
          <div data-cell="6"></div>
          <div data-cell="7"></div>
          <div data-cell="8"></div>
        </div>
      </div>
      );
    }else{
      return (
        <div className='reset'>
        <h1>Player {this.state.turn} Wins!!!</h1>
        <button onClick={(e)=>this.restartButton(e)}>Restart</button>
        </div>
      )
    }
  }
}

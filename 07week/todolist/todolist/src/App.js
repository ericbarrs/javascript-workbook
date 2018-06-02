import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
  inputValue: '',
  lists: []
  }

  inputChange(e){
  this.setState({inputValue: e.target.value});

  }
  handleClick(){
  if(this.state.inputValue){
  const list = this.state.lists;
  list.push(this.state.inputValue);
  this.setState({lists: list});
  this.setState({inputValue: ''})
  }
  }

  deleteLastItem(){
  const list = this.state.lists;
  list.pop(this.state.lists)
  this.setState({lists: list})
  }


  render() {
  const createListItem = this.state.lists.map(function(value){
  if(value){
  return <li>{value}</li>
  }
  });

  return (
  <div className="todo">
  <h1>To do list</h1>
  <button onClick={()=> this.deleteLastItem()}>Delete</button> <input type="text" value={this.state.inputValue} onChange={(e)=> this.inputChange(e)}>{this.state.inputChange}
  </input> <button onClick={()=> this.handleClick()}>Add</button>
  <ul>{createListItem}</ul>
  </div>
  );
  }
  }

  export default App;

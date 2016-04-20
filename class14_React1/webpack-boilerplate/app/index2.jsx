// 3/13 Study Session Code
import style from './styles/';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('Got it')

class MyNewForm extends React.Component {
  constructor() {
    super(); //needed for inheritance
    //Define an intial state object
    this.state = {
        currentIndex : 0,
        message : 'Hello World',
        rappers : []
    };
  }
  
  _handleClick(event){
    var inputValue = document.getElementById("inputId").value;
    if(inputValue.length === 0) {
      console.log('empty');
    } else {
      var cidx = this.state.currentIndex;      
      var newArray = this.state.rappers.slice()
      newArray.push(this.state.value)
      this.setState({
        currentIndex: cidx + 1,
        value: "",
        rappers: newArray
      })
      console.log(this.state.currentIndex);      
      console.log(this.state.editingIndex);      
    }
  }
  _handleChange(event){
    this.setState({
      value: event.target.value
    });
  }
  _editClickHandler(event){
    // console.log(event.target.value);
    this.setState({
      editingIndex: event.target.value
    })    
  }
  render() {
      let handleEdit = this._editClickHandler.bind(this);
      let newRappers = this.state.rappers.map(function(name, i){
        return (<li ref="listItem" key={i}>{name} <button value={i} onClick={handleEdit}>Edit</button></li>);
      });
    return (
        <div>
          <input
            id="inputId"
            type="text"
            value={this.state.value}
            onChange={this._handleChange.bind(this)}
          />
          <button onClick={this._handleClick.bind(this)}>push me</button>
          <ul>{newRappers}</ul>
        </div>
    );
  }
}
var mountPoint = document.querySelector('#app');
ReactDOM.render(<MyNewForm/>, mountPoint);
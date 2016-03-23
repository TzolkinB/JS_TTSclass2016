import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Firebase from 'firebase';

class MessageApp extends React.Component {
  constructor() {
    super();
    this.state = {
      newMessageInput: '',
      messages: []
    }
    this.messagesRef = new Firebase("https://jad-slick.firebaseapp.com/messages");
  }

  _handleButton(event) {
    this.messagesRef.push(this.refs.messageInput.value)
  }

  _handleChange(event) {
    this.setState({
      newMessageInput: event.target.value
    })
  }

  componentDidMount(){
    this.messagesRef.on("child_added", (snapshot) => {
      this.setState({
        messages: this.state.messages.concat(snapshot.val())
      })
    })
  }

  render() {
    var messages = this.state.messages.map((message, i)=>{
      return <li key={i}>{message}</li>
    })

    return (
      <div>
        <h1>Slick</h1>
        <input ref="messageInput" value={this.state.newMessageInput} onChange={this._handleChange.bind(this)} />
        <button onClick={this._handleButton.bind(this)}>Submit</button>
        <ul>
          {messages}
        </ul>
      </div>
    )
  }
}

var mountPoint = document.querySelector("#app");
ReactDOM.render(<MessageApp />,mountPoint)
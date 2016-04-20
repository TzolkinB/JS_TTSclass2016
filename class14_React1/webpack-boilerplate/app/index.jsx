import style from './styles/';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('now running!')

class MessageInput extends React.Component {
    constructor() {
        super();
        this.msgArray = [
            {text: "Hello world", time: "Noon", user: "User1"},
            {text: "HELLO world", time: "8pm", user: "User2"},
            {text: "hello world", time: "11am", user: "User3"}
        ];
    }

    clickHandler(event) {
    	console.log(this.message.value);
    	this.setState ({
          message: event.target.value
        });
        console.log('yay');
    	}
    
    handleButton(event) {
        var newMessages = this.state.messageArray.slice();
        newMessages.push(this.state.message)
        textthis.setState({
            message: newMessages
    })
    console.log(this.state.message);
  }


  render() {
     var messageComponents = this.msgArray.map(function (item, i) {
            return <li key={i}>{item.user + " " + item.time + " " + item.text}</li>
        })
    return (
      <div>
        <ul>{messageComponents}</ul>
       {/* error: Uncaught TypeError: Cannot read property 'value' of null */}
     {/* I had value={this.state.value} no error msg when value={this.props.value} */}
        <input type="text" ref="message" value={this.props.value} />
        {/*<button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        <button onClick={this.handleButton.bind(this)}>Click Me</button>
        <ul>{}</ul>
      </div>
    );
  }
}

            //  <h1>{this.msgArray[0].user}</h1>
            //  <input className="myClass"></input>
            //  <button></button>
            // </div>
         // var currentUser = this.msgArray[0].user
         //   if(currentUser)
//         )
//     }
// }
 


// class MessageInput extends React.Component {
// 	render() {
// 		return ( <div>
// 			<h3> Enter Something Below</h3>
// 			<input type="text"></input>
// 			<button> Send </button>
// 			{list}
// 			</div>
			
// 		)
// 	}
// };

//var mountPoint = document.querySelector("#app");
ReactDOM.render(<MessageInput/>, mountPoint);

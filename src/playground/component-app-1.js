import React, { Component } from 'react';

let randQuote2 = '';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
      randQuote: 'New Quotes Here.'
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({ input: event.target.value })
  };
  submitMessage() {
    this.setState(({ messages }) => ({ messages: messages.concat(this.state.input) }))
    this.setState({ input: '' })

  }
  submitMessage2 = () => {
    randQuote2 = this.state.messages[Math.floor(Math.random() * this.state.messages.length) | 0];
    this.setState({ randQuote: randQuote2 })

  };


  render() {
    return (
      <div>
        <h2>Type in quotes:</h2>
        { /* render an input, button, and ul here */}
        <input type="text" onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message) => <li>{message}</li>)}
        </ul>
        <button onClick={this.submitMessage2}>New Quote</button>
        <li>{this.state.randQuote}</li>
        { /* change code above this line */}
      </div>
    );
  }
}

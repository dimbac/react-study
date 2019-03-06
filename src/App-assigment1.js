import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: '[give me a name!]'
  }

  usernameChangedHandler = (event) =>{
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className = "App">
        <UserInput 
          changed = {this.usernameChangedHandler}
          currentName = {this.state.username}
        />
        <UserOutput 
          userName={this.state.username}
        />
      </div>   
    );
  }
}

export default App;
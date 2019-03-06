import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component { //normal function

/*   const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'John', age: 58},
      {name: 'Stephanie', age: 18}
    ]
  });

  const [otherState, setOtherState] = useState('some OTHER value'); */

  state = {
    persons:[
      {name: 'Max', age: 28},
      {name: 'John', age: 58},
      {name: 'Stephanie', age: 18}
    ],
    otherState: 'ANOTHER VALUE',
    showPersons: false
  }

  
/* switchNameHandler = () => {
  //console.log('Was clicked');
  // DON'T DO THIS: this.state.persons[0].name = 'Ola';
  this.setState({
    persons: [
    {name: 'Maximalian', age: 30},
    {name: 'John Smith', age: 60},
    {name: 'Stephanie Katelyn', age: 20}
    ]
  })
} */

togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render(){

    let persons = null; //for cek if state showPersons true, make sure alway take  the latest state
    if(this.state.showPersons){
      persons = (
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './User/UserOutput';
import userInput from './UserInput/UserInput';


class App extends Component {
state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 18 }
  ],

  users: [
    {userName: "Hui"},
    {userName: "Kang"},
    {userName: "Liang"},
  ]
}

swithNameHandler = (newName) => {
  // console.log("Was clicked");
  this.setState({
    persons: [
      { name: newName, age: 19 },
      { name: "Huihui", age: 29 }
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState ({
    persons: [
      { name: 'Max', age: 19},
      { name: event.target.value, age: 29}
    ]
  })
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Learning React</h1>
        <button 
        style = {style}
        onClick={() => this.swithNameHandler("Maxxxx")}>Swith Name</button>  
        {/* this can be not good */}
        {/* can use bind instead */}
        <Person  
        name ={this.state.persons[0].name} 
        age ={this.state.persons[0].age}/>  
        <Person 
        name={this.state.persons[1].name} 
        age = {this.state.persons[1].age}
       click={this.swithNameHandler.bind(this, 'Hui1')}
       changed={this.nameChangedHandler} > My Hobbies: Racing </Person>

       <userInput />
      </div>
    );
  }
}

export default App;

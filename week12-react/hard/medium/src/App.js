import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
  constructor(props){
    super(props);
  
    this.state =
      {person: {  
          name: 'Julian Reeves',
          number: '9804757907',
          date: '02/02/2020'
      }};
    
    
    }
  






  render(){
    return (
      <div person={this.state.person} classname='easy'>
        <h1>{this.state.person.name}</h1>
        <h1>{this.state.person.number}</h1>
        <h1>{this.state.person.date}</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { id:"asfd8",name: "ramanan", age: 21 },
      { id:"sduf1",name: "navanee", age: 19 }
    ],
    showPerson: false,
  }

  //updating the input fields
  nameChangedHandler = (event,id) => {
     
    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;



    this.setState({ person : persons })
  }

  deletePersonHandler = (personIndex) =>{
    //  const persons = this.state.person.slice();
      const persons = [...this.state.person];
      persons.splice(personIndex,1);
      this.setState({
        person : persons
      })
  }

  togglePersonDetails = () => {
    const showDet = this.state.showPerson;
    this.setState({ showPerson: !showDet });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      boder: '1px solid blue',
      padding: '6px',
      font: 'inherit',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson === true) {
      persons = (
        <div>
          {
            this.state.person.map((person,index) => {
              return <Person
               click={this.deletePersonHandler.bind(this,index)} 
               name={person.name} 
               age={person.age} 
               key={person.id}
               changed={(event) => this.nameChangedHandler(event,person.id)}/>
            })
          }
        </div>
      );
    }

    return (

      <div className="App">
        <h1>This is my first react app</h1>
        <button style={style}
          onClick={this.togglePersonDetails}>Toggle details</button>
        {persons}
      </div>


    );
    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my first react app'));
  }
}

export default App;
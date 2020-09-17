import React, { Component } from 'react';
import './FamousSection.css';

class FamousSection extends Component {

  state = {
    famousPerson: {
      name: '',
      role: '',
    },
    people: [],
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  addPerson = (event) => {
    event.preventDefault();
    console.log( `The famous person is `, this.state.famousPerson );
  }

  onAddFamousPerson = () => {
    console.log('new person is:', this.state.famousPerson);
    this.setState({
      ...this.state.famousPerson,
      people: [
        ...this.state.people,
        this.state.famousPerson.name
      ]
    });
  }

  render() {
    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
    <input id="name-input" onChange={(event) => this.handleChangeFor(event, 'name')} value={this.state.famousPerson.name} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={(event) => this.handleChangeFor(event, 'role')} value={this.state.famousPerson.role} />
          <button type="submit" onClick={this.onAddFamousPerson}>Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}".
        </p>
        <ul>
          {this.state.people.map((person, i) => <li key={i}>{person}</li>)}
        </ul>
      </section>
    );
  }
}

export default FamousSection;

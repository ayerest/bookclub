import React, { Component } from "react";
import JohnMalkovich from "./JohnMalkovich";

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personSelected: false
    }
  }

  selectPerson = (e) => {
    this.setState({personSelected: e.target.value})
  }

  render() {
    return (
      <div className="component class">
        <h2>Class Component</h2>
        <label htmlFor="person">John Malkovich is...</label>
        <select name="person" id="person" onChange={this.selectPerson}>
          <option value={false}>Select a person</option>
          <option value="John Cusack">John Cusack</option>
          <option value="Cameron Diaz">Cameron Diaz</option>
          <option value="Catherine Keener">Catherine Keener</option>
        </select>
        {this.state.personSelected && <JohnMalkovich person={this.state.personSelected} />}
      </div>
    );
  }
}

export default ClassComponent;

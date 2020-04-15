import React, { Component } from 'react'

import '../App.css';

export class AddExercise extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addExercise(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="textBox"
          type="text" 
          name="title" 
          placeholder="Add Exercise"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input className="submitBtn"
          type="submit" 
          value="submit"
          className="submitBtn"
        />
      </form>
    )
  }
}

export default AddExercise

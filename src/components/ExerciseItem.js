import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../App.css';

// Styling for each exercise item with completed display //
export class ExerciseItem extends Component {
  getStyle = () => {
    return {
      padding: '20px',
      margin: '0.5em',

      fontSize: '1em',
      width: '100ch',

      border: '1px solid #000',
      borderRadius: '5px',
      cursor: 'pointer',

      color: '#fff',
      background: this.props.exercise.completed ? '#1B3189' : '#2442B7',
      textDecoration: this.props.exercise.completed ? 'line-through' : 'none'
    }
  } 

  render() {
    const { id, title } = this.props.exercise;
    return (
      <div className="exerciseWrapper">    
        <button style={this.getStyle()} onClick={this.props.toggleComplete.bind (this, id)}>
        { title } 
        </button>
        <button className="removeBtn" onClick={this.props.delExercise.bind (this, id)}>X</button>
      </div>
    )
  }
}

// ProTypes //
ExerciseItem.protoTypes = {
  exercise: PropTypes.object.isRequired
}

export default ExerciseItem
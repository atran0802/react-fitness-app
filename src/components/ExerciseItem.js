import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../App.css';

export class ExerciseItem extends Component {
  getStyle = () => {
    return {
      padding: '15px',
      margin: '0.5em',
      border: '1px solid #000',
      borderRadius: '5px',
      color: '#fff',
      background: this.props.exercise.completed ? '#1B3189' : '#2442B7',
      textDecoration: this.props.exercise.completed ? 'line-through' : 'none'
    }
  } 

  render() {
    const { id, title } = this.props.exercise;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind (this, id)} />
          { ' ' }
          { title }
          <button onClick={this.props.delExercise.bind(this, id)} className="removeBtn">X</button>
        </p>
      </div>
    )
  }
}

// ProTypes
ExerciseItem.protoTypes = {
  exercise: PropTypes.object.isRequired
}

export default ExerciseItem
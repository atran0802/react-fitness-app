import React, { Component } from 'react';
import '../App.css';
import ExerciseItem from './ExerciseItem';
import PropTypes from 'prop-types';

class Exercises extends Component {
  render() {
    return this.props.exercises.map((exercise) => (
      <ExerciseItem key={exercise.id} exercise={exercise} toggleComplete={this.props.toggleComplete} delExercise={this.props.delExercise} />
    ));
  }
}

// ProTypes //
Exercises.protoTypes = {
  exercise: PropTypes.array.isRequired
}

export default Exercises;
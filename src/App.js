import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddExercise from './components/AddExercise';
import Exercises from './components/Exercises';
import Workouts from './components/pages/Workouts';
import Stopwatch from './components/pages/Stopwatch';
import uuid from 'uuid/v4';

import './App.css';

// Array of exercises *Need to replace with exercise API* //
class App extends Component {
  state = {
    exercises: [
      {
        id: uuid(),
        title: 'Push-Up',
        completed: false
      },
      {
        id: uuid(),
        title: 'Squat',
        completed: false
      },
      {
        id: uuid(),
        title: 'Sit-Up',
        completed: false
      }
    ]
  }

// Toggle Complete //
toggleComplete = (id) => {
  this.setState({ exercises: this.state.exercises.map(exercise => {
    if(exercise.id === id) {
      exercise.completed = !exercise.completed
    }
    return exercise;
  }) });
}  

// Delete Exercise //
delExercise = (id) => {
  this.setState({ exercises: [...this.state.exercises.filter(exercise => exercise.id!== id)] });
}

// Add Exercise //
addExercise = (title) => {
  const newExercise = {
    id: uuid(),
    title,
    completed: false
  }
  this.setState({ exercises: [...this.state.exercises, newExercise] });
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
              <div className="innerContainer">
              <Route path="/workouts" component={Workouts} />
              <Route path="/stopwatch" component={Stopwatch} />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddExercise addExercise={this.addExercise} />
                  <Exercises exercises={this.state.exercises} toggleComplete={this.toggleComplete} delExercise={this.delExercise} />
                </React.Fragment>
              )} />
              </div>
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;

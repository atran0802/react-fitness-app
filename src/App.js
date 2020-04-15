import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddExercise from './components/AddExercise';
import Exercises from './components/Exercises';
import Workouts from './components/pages/Workouts';
import Timer from './components/pages/Timer';

import './App.css';

class App extends Component {
  state = {
    exercises: [
      {
        id: 1,
        title: 'Push-Up',
        completed: false
      },
      {
        id: 2,
        title: 'Squat',
        completed: false
      },
      {
        id: 3,
        title: 'Sit-Up',
        completed: false
      }
    ]
  }

// Toggle Complete  
toggleComplete = (id) => {
  this.setState({ exercises: this.state.exercises.map(exercise => {
    if(exercise.id === id) {
      exercise.completed = !exercise.completed
    }
    return exercise;
  }) });
}  

// Delete Exercise
delExercise = (id) => {
  this.setState({ exercises: [...this.state.exercises.filter(exercise => exercise.id!== id)] });
}

// Add Exercise
addExercise = (title) => {
  const newExercise = {
    id: 4,
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
              <Route path="/timer" component={Timer} />
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

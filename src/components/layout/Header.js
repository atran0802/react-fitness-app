import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>React Fitness App</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/workouts">Workouts</Link> | <Link style={linkStyle} to="/stopwatch">Stopwatch</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
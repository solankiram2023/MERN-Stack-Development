import React from 'react';

import GoalList from './components/GoalList.js';
import './App.css';

const App = () => {
  return (
    <div className = "course-goals">
      <h2> Course Goal</h2>
      <GoalList />
    </div>
  );
};

export default App;

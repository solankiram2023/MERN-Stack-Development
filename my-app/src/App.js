import React from 'react';

import GoalList from './components/GoalList.js';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the course main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'},

  ];

  return (
    <div className = "course-goals">
      <h2> Course Goal</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;

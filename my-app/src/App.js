import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList.js';
import NewGoal from './components/NewGoal/NewGoal.js';

import './App.css';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the course main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'}

  ]);
 

  const addNewGoalHandler = newGoal => {
    setCourseGoals(courseGoals.concat(newGoal));
  };



  return (
    <div className = "course-goals">
      <h2> Course Goal</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />

      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;//Component

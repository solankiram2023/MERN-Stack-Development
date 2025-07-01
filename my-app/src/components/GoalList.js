import React from 'react';

import './GoalList.css';


const GoalList = props => {
    // console.log(props.goals);
    return (
        <ul className="goal-list">
            {props.goals.map(goal =>{
                return <li key= {goal.id}>{goal.text}</li>;
            })}
        </ul>

    );
};

//Export GoatList component so it can be used in other parts of the app
export default GoalList;

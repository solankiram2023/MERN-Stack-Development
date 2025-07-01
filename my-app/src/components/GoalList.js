import React from 'react';

import './GoalList.css';


const GoalList = () => {
    return (
        <ul className="goal-list">
            <li> Finish the Course</li>
            <li> Learn all about the course main topic</li>
            <li> Help other students in the course Q&amp;A</li>
        </ul>

    );
};

//Export GoatList component so it can be used in other parts of the app
export default GoalList;

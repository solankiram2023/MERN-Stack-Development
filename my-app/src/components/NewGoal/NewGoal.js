import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
    //let enteredText = '';
    //made a variable to store the input value
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText

        };

        setEnteredText('');
        //enteredText = ''; //reset the input value after submission
        

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    return(<form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler} /> 
        <button type="submit">Add Goal</button>
    </form>
    );
};

export default NewGoal;
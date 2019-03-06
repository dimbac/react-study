import React from 'react';
import './Person.css';

const person = (props) =>{
    return (
        <div className="Person">
            <p>I'm {props.name} and  i am {props.age} years old!</p>
        </div>
    );
};

export default person;
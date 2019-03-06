import React, { Component } from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Here you go!</p>
        </div>
    );
};

export default userOutput;
import React, { Component } from 'react';

const userInput = (props) =>{
    const styleInput = {
        border: '2px solid blue',
        width: '10%',
        padding: '10px',
        margin: '16px',
    }

    return <input
        type="text"
        style = {styleInput}
        onChange={props.changed}
        value = {props.userName}
    />
}

export default userInput;
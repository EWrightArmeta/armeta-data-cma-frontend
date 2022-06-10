import React from 'react';
import './Input.css';



const Input = (props) => {
    return (
        <div class='inputContainer'>
            <div class='inputTitle'>{props.title}</div>
            <input class='input' value={props.value}></input>
        </div>
    );
};
export default Input;
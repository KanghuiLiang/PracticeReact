import React from 'react';

import './Person.css'

const person = (props) => {
    return (
    <div className = 'Person'>
    <p onClick={props.click}>Hello, I am {props.name}! And I am {props.age} Years olds. 
    </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
</div>
      )
};
    
export default person;
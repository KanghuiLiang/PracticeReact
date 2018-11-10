import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
    <div className ="UserOutput">
        <p>this is paragraph one {props.name}
        </p>
        </div>
    )
};


export default userOutput;
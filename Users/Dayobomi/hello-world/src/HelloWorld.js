import React from 'react';
import './HelloWorld.css';

const HelloWorld = ({ tech }) => {
    return(
        <div>
            <h1>Hello World <strong><span className='tech'>{tech}!</span></strong></h1>
        </div>
    );
}

export default HelloWorld;
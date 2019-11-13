import React from 'react';
import './Button.css';
import { store } from "./store";
import setTechnology from './actions'

const Button = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button data-tech={tech} key={`btn-${i}`} className="hello-btn" onClick={dispatchBtnAction}>
                {tech}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

    export default Button;
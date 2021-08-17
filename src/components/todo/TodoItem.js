import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';

export const TodoItem = (props) => {
    //const handleToggle = () => props.handleToggle(props.id)
    //handleToggle is bound to a function that already knows what
    // its first argument is!
    //Partial application of a function through 'bind'
    const handleToggle = partial(props.handleToggle, props.id);
    const hr = partial(props.handleRemove, props.id);
    return (
        <li className="todo-item">
            <span className="delete-item">
                <a href="#" onClick={hr}>
                    {' '}
                    X{' '}
                </a>
            </span>
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={props.isComplete}
                onChange={handleToggle}
            />
            {props.name}
        </li>
    );
};

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};

//finished 6 --

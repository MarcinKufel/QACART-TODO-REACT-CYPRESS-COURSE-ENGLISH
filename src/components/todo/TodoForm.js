import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <h3 className="todo-header">Avalilabe todos</h3>
        <input
            className="todo-input"
            type="text"
            placeholder="Enter a new task"
            onChange={props.handleInputChange}
            value={props.currentTodo}
        />
    </form>
);

TodoForm.propTypes = {
    //lowercase 'p'
    currentTodo: PropTypes.string.isRequired, //uppercase P
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

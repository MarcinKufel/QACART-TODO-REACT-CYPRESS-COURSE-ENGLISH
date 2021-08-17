import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => (
    <div className="Todo-List">
        {props.todos.length === 0 ? (
            <h4>There are no todos available</h4>
        ) : (
            <ul>
                {props.todos.map((todo) => (
                    //  <TodoItem id={todo.id} name={todo.name} isComplete={todo.isComplete}/>
                    <TodoItem
                        key={todo.id}
                        handleRemove={props.handleRemove}
                        handleToggle={props.handleToggle}
                        {...todo}
                    />
                ))}
            </ul>
        )}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

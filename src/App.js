import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { TodoForm, TodoList, Footer } from './components/todo'; //index.js by default
import {
    addTodo,
    toggleTodo,
    generateId,
    findById,
    updateTodo,
    removeTodo,
    filterTodos
} from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';
import {
    loadTodos,
    createTodo,
    saveTodo,
    destroyTodo
} from './lib/todoService';
class App extends Component {
    state = {
        todos: [],
        currentTodo: ''
    };
    static contextTypes = {
        route: PropTypes.string
    };
    componentDidMount() {
        loadTodos().then((todos) => this.setState({ todos }));
    }
    handleToggle = (id) => {
        const getToggledTodo = pipe(findById, toggleTodo);
        const updated = getToggledTodo(id, this.state.todos);
        const getUpdatedTodos = partial(updateTodo, this.state.todos);
        const updatedTodos = getUpdatedTodos(updated);
        this.setState({ todos: updatedTodos });
        saveTodo(updated).then(() => this.showTempMessage('Todo Updated'));
    };
    showTempMessage = (msg) => {
        this.setState({ message: msg });
        setTimeout(() => this.setState({ message: '' }), 2500);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newId = generateId();
        const newTodo = {
            name: this.state.currentTodo,
            id: newId,
            isComplete: false
        };
        var todo = this.state.todos;
        this.setState({
            todos: addTodo(todo, newTodo),
            currentTodo: '',
            errorMessage: ''
        });
        createTodo(newTodo).then(() => this.showTempMessage('Todo Added'));
    };
    handleEmptySubmit = (event) => {
        event.preventDefault();
        this.setState({ errorMessage: 'Please supply a todo item!' });
    };

    handleRemove = (id, event) => {
        event.preventDefault();
        const updatedTodos = removeTodo(this.state.todos, id);
        this.setState({ todos: updatedTodos });
        destroyTodo(id).then(() => this.showTempMessage('Todo Removed'));
    };

    handleInputChange = (event) => {
        this.setState({
            currentTodo: event.target.value
        });
    };
    render() {
        const submitHandler = this.state.currentTodo
            ? this.handleSubmit
            : this.handleEmptySubmit;
        const displayTodos = filterTodos(this.state.todos, this.context.route);
        return (
            <div className="App">
                <div className="App-header">
                    <h2>QAcart To-Do App</h2>
                </div>
                <div className="Todo-App">
                    {this.state.errorMessage && (
                        <span className="error">{this.state.errorMessage}</span>
                    )}
                    {this.state.message && (
                        <span className="success">{this.state.message}</span>
                    )}

                    <TodoForm
                        handleInputChange={this.handleInputChange}
                        handleSubmit={submitHandler}
                        currentTodo={this.state.currentTodo}
                    />
                    <TodoList
                        handleToggle={this.handleToggle}
                        handleRemove={this.handleRemove}
                        todos={displayTodos}
                    />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class TodoApp extends Component {

    render () {
        return (
            <div className="container">
                <TodoHeader title="Todo App" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }


}

export default TodoApp
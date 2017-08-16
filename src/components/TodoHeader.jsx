import React, { Component } from 'react'

class TodoHeader extends Component {
    render () {
        return (
            <div className="flex">
                <nav className="navbar navbar-light bg-light">
                    <span className="h1 navbar-brand mb-0">{ this.props.title }</span>
                </nav>
            </div>
        )
    }
}

export default TodoHeader
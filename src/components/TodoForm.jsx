import React, { Component } from 'react'

class TodoForm extends Component {
    render () {
        return (
            <div className="flex">
                <div className="col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter your todo here..." />
                        <span className="input-group-btn">
                               <button type="button" className="btn btn-default">
                                   <span className="glyphicon glyphicon-plus" aria-hidden="true" />
                                </button>
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoForm

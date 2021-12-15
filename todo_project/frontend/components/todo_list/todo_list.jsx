import React from 'react';

class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul className="todo-list">
                    <li>List Hello</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;
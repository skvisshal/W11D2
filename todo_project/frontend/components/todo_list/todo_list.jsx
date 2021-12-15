import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, receiveTodo} = this.props;
        return(
            <div>
                <ul className="todo-list">
                    {todos.map(todo =>(
                        <TodoListItem
                         todo={todo}
                         key={todo.id}
                         />
                    ))}
                </ul>
                <TodoForm />
            </div>
        );
    }
}

export default TodoList;
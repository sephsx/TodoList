import React from 'react';
import Todo from './Todo';

function TodoList({ todos, removeTodo, updateTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;

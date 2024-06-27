import React from 'react';
import Todo from './Todo';

function TodoList({todos, removeTodo}){
    return (
       <div>
       {todos.map((todo, index)=>(
        <Todo
        key = {index}
        index = {index}
        todo = {todo}
        removeTodo = {removeTodo}
        />
       ))}
       </div>
    )
}

export default TodoList;

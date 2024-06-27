import React from 'react';

function Todo({ todo, index, removeTodo }) {
    return (
        <div className="todo flex justify-between items-center p-2 border-b">
            <span>{todo.text}</span>
            <button 
                onClick={() => removeTodo(index)} 
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 hover:underline">
               Remove
            </button>
        </div>
    );
}

export default Todo;

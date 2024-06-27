import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo({
            text:value,
            completed: false
        })
        setValue('')
    }
    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a new Todo"
            className="border rounded p-2 w-full mb-2"
            />
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-3 text-center me-2 mb-2">Add Todo</button>
        </form>
    )
}

export default TodoForm;
import React, { useState } from 'react';
import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/outline';

function Todo({ todo, index, removeTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(index, editedText);
        setIsEditing(false);
    };

    return (
        <div className="todo flex justify-between items-center p-2 border-b">
            {!isEditing ? (
                <span>{todo.text}</span>
            ) : (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="border rounded p-1"
                />
            )}

            <div>
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="mr-2 text-blue-500 hover:text-blue-700"
                    >
                        <PencilIcon className="h-6 w-6" />
                    </button>
                ) : (
                    <button
                        onClick={handleUpdate}
                        className="mr-2 text-green-500 hover:text-green-700"
                    >
                        <CheckIcon className="h-6 w-6" />
                    </button>
                )}

                <button
                    onClick={() => removeTodo(index)}
                    className="text-red-500 hover:text-red-700"
                >
                    <TrashIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default Todo;

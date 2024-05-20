import React from 'react';

const TodoItem = ({ todo, toggleTodoCompletion, removeTodo }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <label className={`cursor-pointer ${todo.completed && 'line-through'}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(todo.id)}
          className="mr-2"
        />
        {todo.text}
      </label>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => removeTodo(todo.id)}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;

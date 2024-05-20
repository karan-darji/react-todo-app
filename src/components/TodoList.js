import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
        <div
          className="mt-4 rounded-t-md bg-white transition-all duration-700 dark:bg-slate-800"
        >
          {todos.map((todo, index) => (
                <TodoListItem
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
          ))}
        </div>
  )
};

export default TodoList;
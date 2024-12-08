import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTodo, deleteTodo, deleteMultipleTodos }) => {
  const handleDeleteMultiple = () => {
    const selectedIds = todos.filter(todo => todo.selected).map(todo => todo.id);
    deleteMultipleTodos(selectedIds);
  };

  return (
    <div>
      <button onClick={handleDeleteMultiple}>Eliminar seleccionados</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
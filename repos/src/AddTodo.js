import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo({ id: Date.now(), task, status: 'Por hacer' });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTodo;
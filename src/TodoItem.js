import React, { useState } from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    editTodo(todo.id, { ...todo, task: newTask });
    set
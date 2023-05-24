import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../Store/Slices/todosSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import styles from './ToDoList.module.css';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(
        addTodo({
          name: newTodo,
          id: Date.now().toString(),
          status: 'pending',
        })
      );
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  };

  return (
    <div>
      <input
        type="text"
        className={styles.input}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ol className={styles.container}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.status === 'completed'}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.name}
            <button className={styles.btn} onClick={() => handleDeleteTodo(todo.id)}>
              <RiDeleteBinLine />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;

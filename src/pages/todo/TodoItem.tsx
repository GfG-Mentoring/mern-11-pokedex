import { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleComplete } = useContext(TodoContext);

  const handleToggleComplete = () => {
    toggleComplete(todo._id, !todo.completed);
  };

  return (
    <li key={todo._id}>
      <h2>{todo.todo}</h2>
      <button onClick={() => handleToggleComplete()}>Complete</button>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Created At: {todo.createdAt}</p>
      <p>Updated At: {todo.updatedAt}</p>
    </li>
  );
};

export default TodoItem;

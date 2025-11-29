import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../store/slices/todoSlice';

const TodoItem = ({ todo }: { todo: any }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(
      toggleComplete({
        _id: todo._id,
        completed: !todo.completed,
      })
    );
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

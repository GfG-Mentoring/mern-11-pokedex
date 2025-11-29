import { useState } from 'react';
import { addTodo } from '../../store/slices/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim() === '') {
      return;
    }
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;

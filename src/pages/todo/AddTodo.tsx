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

    dispatch(
      addTodo({
        _id: crypto.randomUUID(),
        todo,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

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

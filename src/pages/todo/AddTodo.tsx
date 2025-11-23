import { useState } from 'react';
import { TodoContext } from './TodoContext';
import { useContext } from 'react';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const { addTodoToList } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (todo.trim() === '') {
      return;
    }

    addTodoToList({
      _id: crypto.randomUUID(),
      todo,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

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

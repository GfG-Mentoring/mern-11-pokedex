import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../../store/slices/todoSlice';
import { useEffect } from 'react';

const TodoList = () => {
  const { todos, isLoading, error } = useSelector((state: any) => ({
    todos: state.todo.todos,
    isLoading: state.todo.isLoading,
    error: state.todo.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

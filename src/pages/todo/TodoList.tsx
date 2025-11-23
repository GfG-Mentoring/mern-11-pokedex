import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';

import { useContext } from 'react';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

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

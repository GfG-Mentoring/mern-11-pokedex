import { createContext, useState } from 'react';

const TodoContext = createContext({
  todos: [],
  addTodo: (_todo) => {},
  toggleComplete: (_id, _completed) => {},
});

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState([
    {
      _id: '69197f5132b4f3e93e04267c',
      todo: 'complete assignment',
      completed: false,
      createdBy: {
        $oid: '69197b29b8ea16570c32b627',
      },
      createdAt: '2025-11-16T07:37:53.731Z',

      updatedAt: '2025-11-16T07:37:53.731Z',
    },
    {
      _id: '69197f5132b4f3e93e04267d',
      todo: 'learn tennis',
      completed: false,
      createdBy: {
        $oid: '69197b29b8ea16570c32b627',
      },
      createdAt: '2025-11-16T07:37:53.731Z',
      updatedAt: '2025-11-16T07:37:53.731Z',
    },
  ]);

  const addTodoToList = (todo: any) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id: string, completed: boolean) => {
    setTodos(
      todos.map((todo) => (todo._id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodoToList, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

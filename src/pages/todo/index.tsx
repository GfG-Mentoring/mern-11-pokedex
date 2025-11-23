import TodoList from './todoList';
import AddTodo from './AddTodo';
import { TodoProvider } from './TodoContext';

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default Todo;

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = () => {

    const {todos} = useSelector(state=> state.todo); 


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

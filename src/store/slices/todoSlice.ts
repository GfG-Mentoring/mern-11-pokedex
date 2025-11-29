import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTodoApi, getTodosApi } from '../apis/todoApis';

export const fetchTodos = createAsyncThunk<any, void>(
  'todo/fetchTodos',
  async () => {
    const response = await getTodosApi(5, 0);
    return response.data.data ?? [];
  }
);

export const addTodo = createAsyncThunk<any, string>(
  'todo/addTodo',
  async (todo: string) => {
    const response = await addTodoApi(todo);
    console.log(response);
    return response.data.data;
  }
);

const todoInitialState = {
  todos: [] as any[],
  isLoading: false,
  error: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newTodos = action.payload.filter((todo) => {
          return !state.todos.some((t: any) => t._id === todo._id);
        });
        console.log(newTodos);
        state.todos = [...state.todos, ...newTodos];
        state.isLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = 'Error fetching todos';
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
        state.isLoading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = 'Error adding todo';
        state.isLoading = false;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      });
  },
});

export const todoReducer = todoSlice.reducer;

export const { toggleComplete } = todoSlice.actions;

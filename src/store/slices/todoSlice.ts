import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = {
  todos: [
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
  ],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, toggleComplete } = todoSlice.actions;

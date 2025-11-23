import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleComplete: (state, action) => {},
  },
});

export const todoReducer = todoSlice.reducer;

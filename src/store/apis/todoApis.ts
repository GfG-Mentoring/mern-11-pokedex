import axiosInstance from '.';

export const getTodosApi = (limit: number, page: number) => {
  return axiosInstance.get(`/todos?limit=${limit}&page=${page}`);
};

export const addTodoApi = (todo: string) => {
  if (!todo) {
    throw new Error('Todo is required');
  }
  return axiosInstance.post('/todos', { todo });
};

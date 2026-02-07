import apiClient from "@/lib/api-client";
import { Todo } from "../lib/types";

export const getTodo = async (id: number) => {
  const response = await apiClient.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response.data;
};

export const getTodos = async () => {
  const response = await apiClient.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const createTodo = async (todo: Todo) => {
  const response = await apiClient.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  return response.data;
};

export const patchTodo = async (id: number, todo: Todo) => {
  const response = await apiClient.patch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    todo
  );
  return response.data;
};

export const updateTodo = async (id: number, todo: Todo) => {
  const response = await apiClient.put(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    todo
  );
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await apiClient.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return response.data;
};

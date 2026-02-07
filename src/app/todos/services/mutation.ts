import { useMutation } from "@tanstack/react-query";
import { createTodo, updateTodo, deleteTodo } from "./api";
import { Todo } from "../lib/types";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
  });
};

export const usePatchTodo = () => {
  return useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: Todo }) =>
      updateTodo(id, todo),
  });
};

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: Todo }) =>
      updateTodo(id, todo),
  });
};

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: deleteTodo,
  });
};

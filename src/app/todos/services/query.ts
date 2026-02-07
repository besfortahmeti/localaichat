import { useQuery } from "@tanstack/react-query";
import { getTodo, getTodos } from "./api";

export const useTodo = (id: number) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
  });
};

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });
};

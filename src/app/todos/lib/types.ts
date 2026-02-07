export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
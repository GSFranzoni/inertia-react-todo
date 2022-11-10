export type Todo = {
  id: number;
  description: string;
  completed: boolean;
};

export type CreateTodo = {
  description: string;
};

export type DeleteTodo = {
  id: number;
};

export type UpdateCompletedTodo = {
  id: number;
  completed: boolean;
};

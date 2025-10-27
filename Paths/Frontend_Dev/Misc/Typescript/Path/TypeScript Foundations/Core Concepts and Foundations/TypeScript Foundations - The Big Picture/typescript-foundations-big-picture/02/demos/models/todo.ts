export interface Todo {
  id: string;
  name: string; // change to title
  completed: boolean;
  dueDate?: Date;
}
import { addTodo } from "../services/todoService";

export function handleAddTodo(name: string, dueDate?: Date): void {
  addTodo(name, dueDate);
}
import { Todo } from "../models/todo";

export function renderTodoItem(todo: Todo): void {
  console.log(`${todo.name} - ${todo.completed ? "done" : "not done yet"}`);
}
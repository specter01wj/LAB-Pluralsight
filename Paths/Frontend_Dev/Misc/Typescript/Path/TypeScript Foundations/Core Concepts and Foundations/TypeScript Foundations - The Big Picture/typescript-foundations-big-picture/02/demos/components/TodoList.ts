import { Todo } from "../models/todo";

export function renderTodoList(todos: Todo[]): void {
  todos.forEach(todo => {
    console.log(`${todo.name} [${todo.completed ? "x" : " "}]`);
  });
}
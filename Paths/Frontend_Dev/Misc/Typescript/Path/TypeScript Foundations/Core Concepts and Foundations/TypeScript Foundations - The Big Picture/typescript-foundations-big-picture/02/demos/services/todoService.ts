import { Todo } from "../models/todo";
import { generateId } from "../utils/idGenerator";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const FILE_PATH = join(__dirname, "../../todos.json");

const todos: Todo[] = existsSync(FILE_PATH)
  ? JSON.parse(readFileSync(FILE_PATH, "utf-8")).map((todo: any) => ({
      ...todo,
      dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined
    }))
  : [];

function saveTodos() {
  writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), "utf-8");
}

export function addTodo(name: string, dueDate?: Date): Todo {
  const newTodo: Todo = {
    id: generateId(),
    name,
    completed: false,
    dueDate
  };

  todos.push(newTodo);
  saveTodos();
  return newTodo;
}

export function deleteTodo(id: string): void {
  const index = todos.findIndex(todo => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    saveTodos();
  }
}

export function toggleTodo(id: string): void {
  const todo = todos.find(todo => todo.id === id);
  
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
}

export function listTodos(): Todo[] {
  return todos;
}

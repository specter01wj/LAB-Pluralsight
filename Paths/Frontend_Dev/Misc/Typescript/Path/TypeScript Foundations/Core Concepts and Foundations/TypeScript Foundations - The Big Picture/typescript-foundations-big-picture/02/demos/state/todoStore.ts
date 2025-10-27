import { listTodos } from "../services/todoService";

export function getTodosForDisplay() {
  return listTodos();
}
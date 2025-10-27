import { getTodosForDisplay } from "./state/todoStore";
import { renderTodoList } from "./components/TodoList";
import { handleAddTodo } from "./components/AddTodoForm";

const args = process.argv.slice(2);

if (args.includes("--show")) {
  const todos = getTodosForDisplay();
  renderTodoList(todos);
  process.exit(0);
}

process.stdout.write("Enter a new todo: ");

process.stdin.once("data", (data) => {
  const input = data.toString().trim();
  handleAddTodo(input);

  const todos = getTodosForDisplay();
  renderTodoList(todos);
  
  process.stdin.pause();
});
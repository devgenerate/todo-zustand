import { Todo } from "./todo"

export type AppStore = {
  todos: Todo[]
  addTodo(text: string): Promise<void>
  removeTodo(todoId: string): Promise<void>
  completeTodo(todoId: string): Promise<void>
  completeAll(): Promise<void>
}

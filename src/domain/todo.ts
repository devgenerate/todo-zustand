export type Todo = {
  id: string
  text: string
  isCompleted: boolean
}

export type TodoBase = Omit<Todo, 'id'>

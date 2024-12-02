import { create } from "zustand";

import { AppStore } from "./domain/store";
import { Todo } from "./domain/todo";

export const useStore = create<AppStore>()((set) => ({
  todos: [
    {
      id: '1',
      text: 'Todo 1',
      isCompleted: false
    }
  ],
  async addTodo(text: string) {
    const todo: Todo = {
      text,
      id: String(Date.now()),
      isCompleted: false
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        set((state) => ({ todos: [ ...state.todos, todo ]}))
        resolve()
      }, 1500)
    })

  },
  async removeTodo(todoId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        set((state) => {
          const todos = state.todos.filter(todo => todo.id !== todoId)
          return { todos }
        })
        resolve()
      }, 1000)

    })

  },
  async completeTodo(todoId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        set((state) => {
          const todos = state.todos.map((todo) => {
            if (todo.id !== todoId) {
              return todo
            }

            return { ...todo, isCompleted: true }
          })
          return { todos }
        })
        resolve()
      }, 1000)
    })

  },
  async completeAll() {
    new Promise((resolve) => {
      setTimeout(() => {
        set((state) => {
          const todos = state.todos.map((todo) => ({ ...todo, isCompleted: true }))
          return { todos }
        })
        resolve(null)
      }, 1000)
    })
  },
}))

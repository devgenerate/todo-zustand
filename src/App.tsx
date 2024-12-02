import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { useStore } from "./store"

function App() {
  const todos = useStore(state => state.todos)

  return (
    <div
      className="container"
      style={{
        padding: 100,
        display: 'grid',
        gap: '40px'
      }}
    >
      <header>
        <h2>Todo List</h2>
        <TodoForm />
      </header>

      <section>
        {
          !todos.length && (
            <span>Not todos added</span>
          )
        }

        {
          todos.map((todo) => (
            <TodoItem todo={todo} key={`todo-${todo.id}`} />
          ))
        }
      </section>
    </div>
  )
}

export default App

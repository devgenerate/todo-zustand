import { Todo } from "../domain/todo";
import { useStore } from "../store";

type TodoItemProps = {
  todo: Todo
}

const styles = {
  container: {
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  },
  completed: {
    textDecoration: 'line-through'
  }
}

function TodoItem({ todo }: TodoItemProps) {
  const completeTodo = useStore(state => state.completeTodo)
  const removeTodo = useStore(state => state.removeTodo)

  let stylesToApply = { ...styles.container }

  if (todo.isCompleted) {
    stylesToApply = { ...stylesToApply, ...styles.completed }
  }

  return (
    <article
      style={stylesToApply}
    >
      <span style={{ flex: 1 }}>{todo.text}</span>
      <button onClick={() => completeTodo(todo.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
      </button>
    </article>
  );
}

export default TodoItem;

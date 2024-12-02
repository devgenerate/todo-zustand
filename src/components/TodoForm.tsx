import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useStore } from "../store";

function TodoForm() {
  const addTodo = useStore(state => state.addTodo)
  const [todoText, setTodoText] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value)
  }

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsAdding(true)
    await addTodo(todoText)
    setIsAdding(false)
    setTodoText('')
  }

  return (
    <form className="container" onSubmit={handleSubmit} style={{ display: 'flex', height: '60px', gap: '30px' }}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
      />

      <button disabled={isAdding}>
        {
          isAdding ? (
            <span aria-busy="true"></span>
          ) : 'Add'
        }
      </button>
    </form>
  );
}

export default TodoForm;

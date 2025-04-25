import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import EffectTest from "./components/EffectTest";

function App() {
  const [list, setList] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
  ])

  function addTodo(t) {
    const newTodos = [...list, { id: list.length + 1, text: t }]
    setList(newTodos)
  }

  useEffect(() => {
    document.title = 'todo list'

    return () => {
      document.title = 'todo over'
    }
  })

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {list.length > 0 && <TodoList list={list} />}
      <EffectTest />
    </div>
  );
}

export default App;

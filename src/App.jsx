import { useState } from 'react'
import './App.css'
import TodoCard from './components/TodoList/TodoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoCard/>
  )
}

export default App

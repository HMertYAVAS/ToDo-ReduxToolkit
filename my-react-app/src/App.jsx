import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoPage from './components/TodoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoPage />
    </>
  )
}

export default App

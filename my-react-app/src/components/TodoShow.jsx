import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

export default function TodoShow() {
  const todos = useSelector((state) => state.todos)
  return (
    <div>
      {
        todos.map((todo) => {
          return (

            <div style={{ marginBottom: '10px' }}>
              <TodoItem  id={todo.id} todo={todo} />
            </div>
          )
        })
      }
    </div>
  )
}

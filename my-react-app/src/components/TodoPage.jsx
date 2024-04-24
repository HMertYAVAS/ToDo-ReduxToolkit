import React from 'react'
import TodoAdd from './TodoAdd'
import TodoShow from './TodoShow'

export default function TodoPage() {
  return (
    <div style={{ justifyContent: 'center' ,width: '100%'}}>
        <TodoAdd />
        <TodoShow />
    </div>
  )
}

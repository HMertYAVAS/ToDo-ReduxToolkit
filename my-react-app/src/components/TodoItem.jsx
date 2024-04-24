import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, updateTodo, updateStarredTodo, updateCompletedTodo } from '../redux/todoReducer'

export default function TodoItem({ id, todo }) {
    const dispatch = useDispatch()
    const [text, setText] = useState(todo.item)
    const [isStarred, setIsStarred] = useState(todo.starred)
    const [isCompleted, setIsCompleted] = useState(todo.completed)
    const [isEdit, setIsEdit] = useState(false)

    const editHandle = () => {
        setIsEdit(true)
    }

    const deleteItem = () => {
        dispatch(deleteTodo(id));
        // console.log(id);
    };

    const updateItem = () => {
        dispatch(updateTodo({ id: id, item: text }))

        setIsEdit(false)
    }

    const starredItem = () => {
        setIsStarred(!isStarred)
        dispatch(updateStarredTodo({ id: id, starred: !todo.starred }))
    }

    const completedItem = () => {
        setIsCompleted(!isCompleted)
        dispatch(updateCompletedTodo({ id: id, completed: !todo.completed }))
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: isStarred ? '1px solid yellow' : '1px solid black',
            width: '100%',
            padding: '5px',
            borderRadius: '5px',
        }}>

            {isEdit ?
                <>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} style={{ width: '100%', marginRight: '10px' }} />
                    <button onClick={() => updateItem()}>Send</button>
                </>
                :

                
                <div style={{
                    display: 'flex',
                    alignItems: 'space-evenly',
                    padding: '10px',
                    backgroundColor: 'slategray',
                    width: '100%',
                    borderRadius: '5px',
                }}>


                    <div style={{ display: 'flex', alignItems: 'center' , marginRight: '10px'}}>
                        <input type="checkbox" style={{ marginRight: '10px' }} checked={isCompleted} onChange={() => completedItem()} />
                        <div style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todo.item}</span>
                        </div>
                    </div>

                    <button style={{ marginLeft: 'auto' }} onClick={() => starredItem()}>Star</button>
                    <button style={{ marginLeft: '5px' }} onClick={() => editHandle()}>Edit</button>
                    <button style={{ marginLeft: '5px' }} onClick={() => deleteItem()}>Delete</button>
                </div>
            }
        </div >

    )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoReducer'

export default function TodoAdd() {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
  const addHandle = () => {
    // Ensure we have sth in the text field
    if (text === '') {
      alert('Input must not be empty');
    } else {
      // Add to store
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100),
          item: text,
          completed: false,
          starred: false,
        })
      );
      setText('');
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center',marginBottom: '50px'}}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{width: '300px', marginRight: '10px'}} />
        <button onClick={addHandle}>Add</button>
    </div>
  )
}

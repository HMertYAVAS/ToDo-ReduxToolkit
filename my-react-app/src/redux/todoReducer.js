import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        deleteTodo: (state, action) => {
            return {
              ...state,
              todos: state.todos.filter((item) => item.id !== action.payload),
            };
          },

          updateTodo: (state, action) => { 
            return {
              ...state,
              todos: state.todos.map((item) =>
                item.id === action.payload.id ? action.payload : item
              ),
            };
          },

          updateStarredTodo: (state, action) => { 
            return {
              ...state,
              todos: state.todos.map((item) =>
                item.id === action.payload.id ? { ...item, starred: action.payload.starred } : item
              ),
            };
          },

          updateCompletedTodo: (state, action) => { 
            return {
              ...state,
              todos: state.todos.map((item) =>
                item.id === action.payload.id ? { ...item, completed: action.payload.completed } : item
              ),
            };
          },
    }
})


export const {
    addTodo,
    deleteTodo,
    updateTodo,
    updateStarredTodo,
    updateCompletedTodo
} = todoReducer.actions

export default todoReducer.reducer
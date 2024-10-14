import React from 'react'
import App from '../App'
import { useState } from 'react'


const TodoCreate = ({onCreateTodo}) => {

    const [newTodo, setNewTodo] = useState("")

    const clearInput = () => {
        setNewTodo("")
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput()
    }

  return (
    <div className='todo-create'>
        <input  value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
         className='todo-input' type='text' placeholder='ToDo Giriniz'/>
        <button onClick={createTodo} className='todo-create-button'>ToDo Oluştur</button>
    </div>
  )
}

export default TodoCreate
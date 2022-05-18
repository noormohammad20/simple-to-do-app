import React, { useState } from 'react'
import ToDos from './ToDos'
import style from './home.module.css'
import NewToDo from './NewToDo'
import { v4 as uuidv4 } from 'uuid'
const Home = () => {
    const [toDos, setToDos] = useState([])

    const handleAddToDo = toDo => {
        setToDos((prevToDos) => {
            return [...prevToDos, { id: uuidv4(), toDo }]
        })
    }
    const handleRemoveToDo = id => {

        setToDos((prevToDos) => {
            const filterToDos = prevToDos.filter(todo => todo.id !== id)
            return filterToDos
        })
    }
    return (
        <div className={style.container}>
            <h1 style={{ text: 'center' }}>Simple To-Do App</h1>
            <NewToDo handleAddToDo={handleAddToDo} />
            <ToDos toDos={toDos} onRemoveToDo={handleRemoveToDo} />
        </div>
    )
}

export default Home
import React from 'react'
import ToDos from './ToDos'
import style from './home.module.css'
import NewToDo from './NewToDo'
const someToDos = [
    {
        id: 1,
        title: 'todo1',
        des: 'des1'
    },
    {
        id: 2,
        title: 'todo2',
        des: 'des2'
    },
]
const Home = () => {
    return (
        <div className={style.container}>
            <h1 style={{ text: 'center' }}>Simple To-Do App</h1>
            <NewToDo />
            <ToDos toDos={someToDos} />
        </div>
    )
}

export default Home
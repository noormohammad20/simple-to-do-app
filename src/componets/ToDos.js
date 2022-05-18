import React from 'react'
import ToDo from './ToDo'
import style from './toDos.module.css'
const ToDos = ({ toDos }) => {
    return (
        <div className={style.toDos}>
            {
                toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} />)
            }
        </div>
    )
}

export default ToDos
import React from 'react'
import ToDo from './ToDo'
import style from './toDos.module.css'
const ToDos = ({ toDos, onRemoveToDo }) => {

    return (
        <div className={style.toDos}>
            {
                toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo.toDo} id={toDo.id}
                    onRemoveToDo={onRemoveToDo}
                />)
            }
        </div>
    )
}

export default ToDos
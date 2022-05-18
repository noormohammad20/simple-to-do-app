import React from 'react'
import style from './toDo.module.css'
const ToDo = (props) => {
    const { title, des } = props.toDo
    const { id } = props
    const handleClick = id => {
        props.onRemoveToDo(id)
    }
    return (
        <section className={style.toDo}>
            <div>
                <h3>{title}</h3>
                <p>{des}</p>
            </div>
            <div>
                <button
                    onClick={() => { handleClick(id) }}
                    className={style.btn}><i className='fa fa-trash fa-2x'></i></button>
            </div>
        </section>
    )
}

export default ToDo
import React, { useState } from 'react'
import style from './newToDo.module.css'

const NewToDo = ({ handleAddToDo }) => {
    const [toDo, setToDo] = useState({ title: '', des: '' })
    const { title, des } = toDo

    const handleChange = e => {
        const name = e.target.name
        setToDo((oldToDo) => {
            return { ...oldToDo, [name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddToDo(toDo)
        setToDo({ title: "", des: "" })
        alert('successfully added')

    }
    return (
        <form onSubmit={handleSubmit} className={style.from}>
            <div className={style["from-field"]}>
                <label htmlFor="title">Name:</label>
                <input type="text" name="title" id="title"
                    value={title} onChange={handleChange} />
            </div>
            <div className={style["from-field"]}>
                <label htmlFor="des">Description:</label>
                <textarea type="text" name="des" id="des"
                    value={des} onChange={handleChange} />
            </div>
            <button type='submit'>Add ToDO</button>
        </form>
    )
}

export default NewToDo
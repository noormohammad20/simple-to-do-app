import React, { useState } from 'react'
import style from './newToDo.module.css'

const NewToDo = () => {
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
        console.log(toDo)

    }
    return (
        <form onClick={handleSubmit} className={style.from}>
            <div className={style["from-field"]}>
                <label htmlFor="title">Title:</label>
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
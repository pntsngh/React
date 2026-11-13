import { useState } from "react"
import styles from "./TodoItem.module.css"


function AddTask({ onAddTask }) {
    const [task, setTask] = useState("")

    function handleAddTask() {
        if (task.trim() === "") return;

        onAddTask(task)
        setTask("")
    }

    return (
        <div>
            <input value={task} onChange={(event) => setTask(event.target.value)}/>
            <button onClick={handleAddTask}>Add task</button>
        </div>
    )
}

export default AddTask
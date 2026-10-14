import styles from "./TodoItem.module.css"

function TodoItem({ task, onRemoveTask }) {

  return (
    <div className={styles.item}>
        <h2>{task.text}</h2>

      <button onClick={() => onRemoveTask(task.id)}>
        Remove
      </button>
    </div>
  )
}

export default TodoItem
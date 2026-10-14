import TodoItem from "./TodoItem"

function TodoList({ tasks, onRemoveTask }) {

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem 
            key={task.id} 
            task={task}
            onRemoveTask={onRemoveTask} 
        />
      ))}
    </div>
  )
}

export default TodoList

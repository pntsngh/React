import React, {useState} from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(increase)}>Increase</button>
      <button onClick={() => setCount(decrease)}>Decrease</button>
    </div>
  )
}

export default Counter
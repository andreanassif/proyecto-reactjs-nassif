import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('Text')

    const increment = () => {
        
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>{text}</h2>
            <h2>{count}</h2>
            <button class="btn btn-light" onClick={decrement}>Decrementar</button>
            <button class="btn btn-light" onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter
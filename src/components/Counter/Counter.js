import { useState } from 'react'

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('Text')

    const increment = () => {
        if(count < stock) { 
        setCount(count + 1)
    }
    }

    const decrement = () => {
        if (count > 1) {
        setCount(count - 1)
    }
    }

    return (
        <div>
            <h2>{text}</h2>
            <h2>{count}</h2>
            <button class="btn btn-light" onClick={decrement}>Decrementar</button>
            <button class="btn btn-light" onClick={increment}>Incrementar</button>
            <button class="btn btn-light" onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default Counter
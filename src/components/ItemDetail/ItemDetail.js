import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import CartContext from '../../context/CartContext'

/* const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({nombre, desc, tipo, precio, stock, img}) => {
    
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    console.log(quantityToAdd)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount    

    return (
        <>
            <div className="ItemDetail">
                <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
                <img src={img} alt={nombre} className="ItemImg"/>
                <h1>{nombre}-{tipo} </h1>
                <p>{desc}</p>
                <p>{precio}</p>
                <p>{stock}</p>
            </div>
            <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <Count onConfirm={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
            </footer>        
        </>
        
    )
}

export default ItemDetail */

const ItemDetail = ({ id, nombre, img, tipo, desc, precio, stock }) => {
    
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, nombre, precio, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)


    return (
        <>
        <div className="ItemDetail">
                <img src={img} alt={nombre} className="ItemImg"/>
                <h1>{nombre}/{tipo}</h1>
                <p>{desc}</p>
                <p>{precio}</p>
                <p>{stock}</p>
            </div>
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Counter onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
            </>
    )
 }

 export default ItemDetail

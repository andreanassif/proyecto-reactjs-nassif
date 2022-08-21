import { useContext } from 'react'
import CartContextProvider from '../../context/CartContext'
import CartItem from '../Cart/CartItem'
import { Link} from 'react-router-dom'


const Cart = () => {
    const {cart, clearCart, getQuantity, getTotal} = useContext(CartContextProvider)

    const totalQuantity = getQuantity()
    const total =getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>El carrito está vacio</h1>
        )
    }

    return (
                <>
                    <div className="cart">
                        {cart.map((prod) => (
                            <CartItem
                                key= {prod.id} {...prod}
                            />
                        ))}
                        <div className='cartBtn'>
                            <h2>Total: ${total}</h2>
                            <button onClick={clearCart}>Vaciar carro</button>
                            <Link to='/checkout' className='Option'>Checkout</Link>
                        </div>
                    </div>
                </>
    )
}

        

export default Cart
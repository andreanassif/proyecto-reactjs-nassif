import React from 'react'
import { useContext } from 'react'
import { CartContextProvider } from '../../context/CartContext'
import CartDetail from '../Cart/CartDetail'

const Cart = () => {
    const {cart, removeItem, total, removeAll} = useContext(CartContextProvider)

    return (
        <>
            {cart.length === 0 ? (
                <div className="empty">Tu carro está vacio</div>
            ) : (
                <>
                    <div className="cart">
                        {cart.map((products) => (
                            <CartDetail
                                products={products}
                                removeItem={removeItem}
                                key={products.id}
                            />
                        ))}
                        <div className='cartBtn'>
                            <h2>Total: ${total}</h2>
                            <button onClick={removeAll}>Vaciar carro</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart
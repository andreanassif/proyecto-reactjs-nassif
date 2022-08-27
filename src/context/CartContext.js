import { useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod=> {
            accu += prod.quantity
        })
        return accu
    } //ok

    const clearCart = () => {
        setCart([])
    } //ok

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    } //ok

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    } //ok

    const getTotal = ()=> {
        let accu = 0

        cart.forEach(prod=> {
            accu += prod.quantity * prod.precio
        })

        return accu 
    } //ok

    

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    } //ok

    return (
        <CartContext.Provider 
                value={{ 
                    cart, 
                    addItem,
                    isInCart,
                    removeItem,
                    clearCart,
                    getProductQuantity,
                    getQuantity,
                    getTotal }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
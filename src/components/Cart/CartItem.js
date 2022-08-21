import {useContext} from "react";
import CartContextProvider from "../../context/CartContext";


const CartItem = ({id, nombre, quantity, precio}) => {
    const {removeItem} = useContext(CartContextProvider)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <>
            <article className="CartItem">
                <header className="HeaderCartItem" >
                    <h2 className="ItemCart" >
                        {nombre}
                    </h2>
                </header>
            </article>
            <section className="CartItemContainer">
                <p className="InfoCart" >
                    Cantidad: {quantity}
                </p>
                <p className="InfoCart" >
                    Precio unitario: {precio}
                </p>
            </section>
            <footer className="CartItemFooter">
                <p className="InfoCartFooter">
                    Subtotal: ${precio * quantity}
                </p>
                <button className="ButtonCartItem" onClick={()=> handleRemove(id)}> X </button>
            </footer>
        </>
    )
}

export default CartItem
import './ItemDetail.css'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import CartContext from '../../context/CartContext'
import NotificactionContext from '../../notification/Notification'


const ItemDetail = ({ id, nombre, img, tipo, desc, precio, stock }) => {
    
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    const {setNotification} = useContext(NotificactionContext)


    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log('quantity')
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, nombre, precio, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agregaron ${quantity} ${nombre}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {tipo}
                </p>
                <p className="Info">
                    Descripción: {desc}
                </p>
                <p className="Info">
                    Precio: {precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Counter onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
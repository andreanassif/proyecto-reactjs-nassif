import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart' className="CartWidget">
            <img src="https://res.cloudinary.com/dhndpus6m/image/upload/v1659133157/Locosen3D/carrito_fzdeus.png" alt='cart-widget' className='CartImg'/>
            {quantity}
        </Link>
    );
}

export default CartWidget


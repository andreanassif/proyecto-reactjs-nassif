import { useState, useEffect} from 'react'
import { getProductosById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    const { productosid } = useParams()

    useEffect(() => {
        getProductosById(productosid)
                                .then(productos => {setProductos(productos)})
                                .catch(error =>{console.log(error)})
    }, [productosid])
    
    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...productos}/>
        </div>

    )
}

export default ItemDetailContainer
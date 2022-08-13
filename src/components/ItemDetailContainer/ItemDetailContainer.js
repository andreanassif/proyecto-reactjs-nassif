import { useState, useEffect} from 'react'
import { getProductosById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productosid } = useParams()

    useEffect(() => {
        getProductosById(productosid).then(response => {
            setProductos(response)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productosid])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer
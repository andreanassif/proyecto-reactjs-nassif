import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productid } = useParams()

    useEffect(() => {
        getProductById(productid).then(response => {
            setProduct(response)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productid])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer
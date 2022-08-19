import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

 //   if(loading) {
 //       return <h1>Cargando...</h1>
 //   }
    
    return (
        <div className='ItemDetailContainer' >
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...products} />}
        </div>
    )
}

export default ItemDetailContainer
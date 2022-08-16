import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { getProducts, getProductsByTipo } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {tipoId} = useParams()

/*     useEffect(() => {

        const onResize = () => {
            console.log('cambio tamañno ventana')
        }

        window.addEventListener('resize', onResize )

        return () => window.removeEventListener('resize', onResize)

    }, [])
 */
    useEffect(() => {
      setLoading(true)
      const asyncFunction = tipoId ? getProductsByTipo : getProducts
      
      asyncFunction(tipoId).then(response => {
          setProducts(response)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })  
  }, [tipoId])    

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
          <h1>{`${greeting} ${tipoId || ''}`}</h1>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { getProductos, getProductosByTipo } from '../../asyncMock'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {tipoId} = useParams()


    useEffect(() => {
      setLoading(true)
      const asyncFunction = tipoId ? getProductosByTipo : getProductos
      
      asyncFunction(tipoId).then(response => {
          setProductos(response)
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
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
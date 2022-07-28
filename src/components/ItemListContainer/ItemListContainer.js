import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { getProductos } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect(() => {
      getProductos().then(productos=>{
        setProductos(productos)
      })
    }, []) 

    /* const productosComp = productos.map(prod=> <li key={prod.id}>{prod.nombre}</li>)
    console.log(productosComp) */

    return (
        <>
            <h3> 
                {greeting}
            </h3>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
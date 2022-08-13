import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { getProductos, getProductosByTipo } from '../../asyncMock'
import {useParams} from 'react-router-dom'

import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    const {tipoId} = useParams()

    useEffect(() => {
      const asyncFunction = tipoId ? getProductosByTipo : getProductos

      asyncFunction(tipoId).then(productos => {
        setProductos(productos)
      }).catch(error => {
        console.log(error)
      })
      // if(!tipoId) {
        //     getProductos().then(productos => {
        //         setProductos(productos)
        //     })
        // } else {
        //     getProductsByTipo(tipoId).then(productos => {
        //         setProductos(productos)
        //     })
        // }
    }, [tipoId]) 

    /* const productosComp = productos.map(prod=> <li key={prod.id}>{prod.nombre}</li>)
    console.log(productosComp) */

    return (
        <>
            <h3>{greeting}</h3>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
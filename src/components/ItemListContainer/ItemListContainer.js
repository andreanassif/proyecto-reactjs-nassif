import './ItemListContainer.css'
import {useState, useEffect} from 'react'
// import { getProducts, getProductsByTipo } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {dbase} from '../../services/firebase'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = ({ greeting }) => {
    const {tipoId} = useParams()
    const getProductsFromFirestore = ()=> getProducts(tipoId)
    const { data, error, isLoading} = useAsync(getProductsFromFirestore, [tipoId])

    if(isLoading) {
      return <h1>Cargando Productos...</h1>
    }

    if(error) {
      return <h1>Se ha producido un error</h1>
    }

    if(data.length === 0) {
      return tipoId ? <h1>No hay productos en nuestra categoria {tipoId} </h1> : <h1>No hay productos disponibles</h1>
    }

//     const [products, setProducts] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//       setLoading(true)

//       const collectionRef = !tipoId
//           ? collection(dbase, 'ItemList')
//           : query(collection(dbase, 'ItemList'), where( 'tipo', '==', tipoId))

//         getDocs(collectionRef).then(response => {
//             const prodsAdapted = response.docs.map(doc => {
//                 const data = doc.data()
//                 return {id: doc.id, ...data}
//             })
//             setProducts(prodsAdapted)
//         }).catch(error=> {
//           console.log(error)
//         }).finally(()=> {
//           setLoading(false)
//         })

//     //   const asyncFunction = tipoId ? getProductsByTipo : getProducts
      
//     //   asyncFunction(tipoId).then(response => {
//     //       setProducts(response)
//     //   }).catch(error => {
//     //       console.log(error)
//     //   }).finally(() => {
//     //       setLoading(false)
//     //   })  
//   }, [tipoId])


  
//   if(loading) {
//     return <h1>Cargando Productos...</h1>
//   }
// //     return tipoId ? <h1>No hay productos en nuestra categoria {tipoId}</h1> : <h1>No hay productos disponibles</h1>
// // }
    return (
        <div className='ItemListContainer' onClick={() => console.log('click en itemlistcontainer')}>
          <h1>{`${greeting} ${tipoId || ''}`}</h1>
            <ItemList products={data} />
        </div>
    )
}

export default ItemListContainer
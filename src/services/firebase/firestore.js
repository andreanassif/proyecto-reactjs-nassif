import { collection, getDocs, query, where } from "firebase/firestore";
import { dbase } from "./index";
import { createProductFromFirestore } from '../../adapters/prodsAdapted';

export const getProducts = (tipoId) => {
    const collectionRef = !tipoId
    ? collection(dbase, 'ItemList')
    : query(collection(dbase, 'ItemList'), where('tipo', '==', tipoId))

    return getDocs(collectionRef).then(response=> {
        const prodsAdapted = response.docs.map(doc => {
            return createProductFromFirestore(doc)
        })
        return prodsAdapted
    }).catch(error=> {
        return error
    })
}
export const createProductFromFirestore = (doc) => {
    const data = doc.data()

    const prodsAdapted = {
        id: doc.id,
        nombre: data.nombre,
        img: data.img,
        precio: data.precio,
        tipo: data.tipo,
        desc: data.desc,
    }

    return prodsAdapted
}
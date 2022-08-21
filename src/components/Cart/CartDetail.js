import React from "react";

const CartDetail = ({products, removeItem}) => {
    return (
        <div className="infoCart">
            <img src="{products.img}" alt="{products.nombre}" width="100px"/>
            <h2>{products.nombre}</h2>
            <h2>${products.price}</h2>
            <h2>Cantidad: {products.quantity}</h2>
            <button onClick={()=> removeItem(products.id)}>Eliminar</button>
        </div>
    )
}

export default CartDetail
import './Item.css'

const Item = ({productos})=> {
    return (
        <div class="card">
            <div class="card-image">
                <img src="{productos.img}" alt="images"/>
                <span class="card-title">{productos.nombre}</span>
            </div>
            <div class="card-content">
                <p>{productos.tipo}</p>
                <p>{productos.desc}</p>
                <span><p>${productos.precio}</p></span>
                <p>Unidades disponibles: {productos.stock}</p>
            </div>
        </div>
    )
}

export default Item
import './Item.css'

const Item = ({productos})=> {
    return (
        <div class="card">
            <div class="card-image">
                <img class="img-card" src={productos.img} alt="images"/>
            </div>
            <div class="card-content">
                <span class="card-title">{productos.nombre}</span>
                <p>{productos.tipo}</p>
                <p>{productos.desc}</p>
                <span><p>${productos.precio}</p></span>
                <p>Unidades disponibles: {productos.stock}</p>
            </div>
        </div>
    )
}

export default Item
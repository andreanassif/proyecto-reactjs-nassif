import './Item.css'
import { Link } from 'react-router-dom'
import { getProductos } from '../../asyncMock'

const Item = ({})=> {
    return (
        <div class="card">
            <div class="card-image">
                <img class="img-card" src={getProductos.img} alt="images"/>
            </div>
            <div class="card-content">
                <span class="card-title">{getProductos.nombre}</span>
                <p>{getProductos.tipo}</p>
                <p>{getProductos.desc}</p>
                <span><p>${getProductos.precio}</p></span>
                <p>Unidades disponibles: {getProductos.stock}</p>
            </div>
            <footer className='ItemFooter'>
                <Link to={`/detail/${getProductos.id}`} className='Option'>Ver detalle</Link>
            </footer>
            </div>
    )
}

export default Item
import './Item.css';
import { Link } from 'react-router-dom';
//import { getProductos } from '../../asyncMock';

const Item = ({id, nombre, img, precio, tipo, desc, stock})=> {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div class="card" onClick={handleClick}>
            <div class="card-image">
                <img class="img-card" src={img} alt="images" />
            </div>
            <div class="card-content">
                <span class="card-title">{nombre}</span>
                <p>{tipo}</p>
                <p>{desc}</p>
                <span><p>${precio}</p></span>
                <p>Unidades disponibles: {stock}</p>
            </div>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
            </div>
    );
};

export default Item;
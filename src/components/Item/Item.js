import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, precio})=> {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <article className="CardItem" onClick={handleClick}>
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )

};

export default Item;
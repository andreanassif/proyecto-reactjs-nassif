import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className="Navbar navbar navbar-dark bg-dark navbar-toggler">
            <img id="logo" class="animate__heartBeat" src="images/logolocos.jpg" alt=""/>
            <div>
            <Link to='/'>ECOMMERCE LOCOS EN 3D</Link>
            </div>
            <div className='Tipo'>
                <Link to='/tipo/Deco' className="Option">Deco</Link>
                <Link to='/tipo/Juegos' className="Option">Juegos</Link>
                <Link to='/tipo/Soportes' className="Option">Soportes</Link>
                <Link to='/tipo/Lapiceros' className="Option">Lapiceros</Link>
                <Link to='/tipo/Mates' className="Option">Mates</Link>
                <Link to='/tipo/Otros' className="Option">Otros</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar
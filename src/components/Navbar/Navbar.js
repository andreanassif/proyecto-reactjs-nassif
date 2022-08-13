import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
//import {getProductosByTipo} from '../asyncMock.js'


const Navbar = () => {

    return (
        
        <nav className="Navbar navbar navbar-dark bg-dark navbar-toggler">
            <img id="logo" class="animate__heartBeat" src="images/logolocos.jpg" alt=""/>
            <div>
            <Link to='/'>
                ECOMMERCE LOCOS EN 3D
            </Link>
            </div>
            <div className='tipo'>
                <NavLink to='/tipo/Deco' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deco</NavLink>
                <NavLink to='/tipo/Juegos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink>
                <NavLink to='/tipo/Soportes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Soportes</NavLink>
                <NavLink to='/tipo/Lapiceros' cclassName={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lapiceros</NavLink>
                <NavLink to='/tipo/Mates' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink>
                <NavLink to='/tipo/Otros' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Otros</NavLink>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar
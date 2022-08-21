import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import { useState, useEffect} from 'react'
import {dbase} from '../../services/firebase'



const Navbar = () => {

    const [tipos, setTipos] = useState([])

    useEffect(()=> {
        const collectionTipos = collection(dbase, 'tipo')

        getDocs(collectionTipos).then((response) => {
        const tipos = response.docs.map((tipos)=> {
            return {
                id: tipos.id,
                ...tipos.data()
            }
        })
        setTipos(tipos)
        })
    },[])

    console.log('tipo', tipos)

    return (
        
        <nav className="Navbar navbar navbar-dark bg-dark navbar-toggler">
            <img id="logo" className="animate__heartBeat" src="https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/logolocos_x6ztl9.jpg" alt=""/>
            <div>
            <Link to='/'>
                ECOMMERCE LOCOS EN 3D
            </Link>
            </div>
            <div className='tipo'>
                <NavLink to='/tipo/deco' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deco</NavLink>
                <NavLink to='/tipo/juego' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos</NavLink>
                <NavLink to='/tipo/soportes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Soportes</NavLink>
                <NavLink to='/tipo/lapiceros' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lapiceros</NavLink>
                <NavLink to='/tipo/mate' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink>
                <NavLink to='/tipo/veladores' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Veladores</NavLink>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar
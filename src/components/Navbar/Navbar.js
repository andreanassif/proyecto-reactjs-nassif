import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

    const text = 'hiciste click'

    const handleClick = () => {
        console.log(text)
    }
    
    return (
        <nav className="Navbar navbar navbar-dark bg-dark navbar-toggler">
            <img id="logo" class="animate__heartBeat" src="images/logolocos.jpg" alt=""/>
            <div>
                
                <h1>Bienvenidos a Locos en 3D!</h1>
            </div>
            <div>
                <Button handleClick={handleClick} color='red'>Deco</Button>
                <Button handleClick={handleClick} color='black'>Juegos</Button>
                <Button handleClick={handleClick} color='blue'>Soportes</Button>
                <Button handleClick={handleClick} color='violet'>Lapiceros</Button>
                <Button handleClick={handleClick} color='gold'>Mates</Button>
                <Button handleClick={handleClick} color='pink'>Otros</Button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar
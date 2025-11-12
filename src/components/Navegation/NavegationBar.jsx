import './NavegationBar.css'
import { Link } from 'react-router-dom'
function NavegationBar() {
    return (
        <nav className='navegacion'>
   
            <ul>
                <li> <Link to="/"> Inicio </Link> </li>
                <li><Link to="/nudo">Nudo </Link></li>
                <li><Link to="/descenlace"> Descenlace</Link></li>
            </ul>
        </nav>

    )
}
export default NavegationBar
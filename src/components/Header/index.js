import './style.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="logo" to="/">ESTREAM TV</Link>
            <Link className="favoritos" to="favoritos" >Meus Fimes</Link> 
        </header>
    )
}

export default Header;  
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchContainer from './search/Search'
import { useNavigate } from 'react-router-dom';

function redirect () {
    window.location.replace("http://localhost:3002/");
}

const NavbarLeft = () => {
    let navigate = useNavigate();
    return (
        <div className="NavbarLeft">
            <div className="seller_space">
                <p className="toSeller" onClick={redirect}>Espace Vendeur</p>
            </div>
        </div>
    )
}

export default NavbarLeft

import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './navbar.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const NavbarRight = () => {
    const quantity =  useSelector(state => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    
    return (
        <div className="NavbarRight">
            <p className="menuItem">{user ? "" : "Inscription"}</p>
            {user ? <p className="menuItem">Deconnexion</p> : <Link to="/login" style={{color: "#111", textDecoration : "none"}}className="menuItem">Connexion</Link>}
            <Link to="/cart" style={{color : "black"}}>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
            </Link>
        </div>
    )
}

export default NavbarRight

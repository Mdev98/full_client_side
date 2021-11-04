import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './navbar.css';

const NavbarRight = () => {
    return (
        <div className="NavbarRight">
            <p className="menuItem">Inscription</p>
            <p className="menuItem">Connexion</p>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
            </Badge>
        </div>
    )
}

export default NavbarRight

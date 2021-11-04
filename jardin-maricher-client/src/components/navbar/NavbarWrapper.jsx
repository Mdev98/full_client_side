import './navbar.css';
import NavbarLeft from './NavbarLeft';
import NavbarMiddle from './NavbarMiddle';
import NavbarRight from './NavbarRight';

const NavbarWrapper = () => {
    return (
        <div className="navbar-wrapper">
            <NavbarLeft />
            <NavbarMiddle />
            <NavbarRight />
        </div>
    )
}

export default NavbarWrapper

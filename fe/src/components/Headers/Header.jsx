import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" exact>Home</NavLink>

            <div className="guestZone">
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/register" exact>Registro</NavLink>
            </div>
        </header>
    )
}
export default Header;
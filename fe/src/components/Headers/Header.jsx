import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
          <div className="homeB">
            <NavLink to="/" exact>Home</NavLink>
          </div>

            <div className="guestZone">
                <NavLink to="/shop" exact>Shop</NavLink>
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/register" exact>Register</NavLink>
                <NavLink to="/" exact>Logout</NavLink>
            </div>
        </header>
    )
}
export default Header;
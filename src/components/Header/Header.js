import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    return (
        <header className="main-header">
            <div>
                <Link to={`/`} className="main-header__brand">
                    Logo
                </Link>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <Link to={`/carts`}>Cart</Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
}

export default Header;

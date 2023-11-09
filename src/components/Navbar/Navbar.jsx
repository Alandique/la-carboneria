import './styles.css';
import CartWidget from '../CardWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>

                <Link  to={'/'} className="h1">
                            La Carboneria
                        </Link>
            </div>
            <div>
                <ul className="list-container">
                    <li>
                        <Link to={'/category/electronics'} className="category-button">
                            Carbon 3Kg
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/jewelery'} className="category-button">
                            Carbon 5Kg
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/men's clothing"} className="category-button">
                            Carbon a granel
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/women's clothing"} className="category-button">
                            Otros
                        </Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>

    );
};

export default Navbar;
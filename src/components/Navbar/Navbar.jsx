import './styles.css';
import CartWidget from '../CardWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img alt='carbon' src={'./images/carbon.png'} width={'100px'}/>
                <h1 className='h1'>La Carboneria</h1>
            </div>
            <div>
                <ul className="list-container">
                    <li>
                        <Link to={'/category/carbon3kg'} className="category-button">
                            Carbon 3Kg
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/carbon5kg'} className="category-button">
                            Carbon 5Kg
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/carbon-a-granel'} className="category-button">
                            Carbon a granel
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/otros'} className="category-button">
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
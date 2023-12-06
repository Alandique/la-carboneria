import './styles.css';
import CartWidget from '../CardWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>

                <NavLink  to={'/'} className="h1">
                <img src="../Carbon_logo.png" alt="logo de carbon" className="logo" />
                            La Carboneria
                        </NavLink>
            </div>
            <div>
                <ul className="list-container">
                    <li>
                        <NavLink activeclassname="active" to={'/category/Alimento'} className="category-button">
                            Alimentos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={'/category/Leña'} className="category-button">
                            Leña
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={"/category/Huevos"} className="category-button">
                            Huevos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={"/category/Otros"} className="category-button">
                            Otros
                        </NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to={"/cart"} className="category-button">
            <CartWidget />
                        </NavLink>
            
        </div>

    );
};

export default Navbar;
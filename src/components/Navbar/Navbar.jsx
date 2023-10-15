import './styles.css';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CardWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <button className="category-button">
                            Carbon 3kg
                        </button>
                    </li>
                    <li>
                        <button className="category-button">
                            Carbon 5kg
                        </button>
                        </li>
                    <li>
                        <Button variant="outline-warning">Carbon a Granel</Button>{''}
                        </li>
                </ul>
            </div>
            <CartWidget />
        </div>

    );
};

export default Navbar;
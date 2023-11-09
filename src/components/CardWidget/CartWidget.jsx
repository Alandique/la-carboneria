import './styles.css';
import * as Icon from 'react-bootstrap-icons';
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () => {
    return (
        <div className='cart-widget-container'>
           <Icon.Cart color='white' size={30}/>
           <div className='numero-cart'>
            <h3></h3>
           </div>

           <ItemCount />
        </div>



    )
}

export default CartWidget
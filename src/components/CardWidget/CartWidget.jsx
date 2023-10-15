import './styles.css';
import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <div>
           <Icon.Cart color='white'/>
           <div className='numero-cart'>
            <h3>7</h3>
           </div>
        </div>



    )
}

export default CartWidget
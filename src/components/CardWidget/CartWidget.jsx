 import './styles.css';
 import * as Icon from 'react-bootstrap-icons';
 import { CartContext } from '../../context/CartContext';
 import React, { useContext } from 'react';

 const CartWidget = () => {
     const { productQuantity } =useContext(CartContext);
     return (
         <div className='cart-widget-container'>
            <Icon.Cart color='white' size={30}/>
            <div className='numero-cart'>
             <h3>{productQuantity}</h3>
            </div>

         </div>



     )
 }

 export default CartWidget
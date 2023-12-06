import { useState, useContext } from 'react';
import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    addItem(itemSelected, count);
    navigate('/item/:id');
  };
  const handleNavigation = () => {
    navigate('/cart');
  };
  return (
    <div className='tarjeta-detalle'>
      <h6 className="titulo-tarjeta">{itemSelected?.title}</h6>
      <img className="image" src={itemSelected?.image} alt={itemSelected?.title} width={100} />
      <div className="card-description">
        <p>{itemSelected?.description}</p>
      </div>
      <span>Stock: {itemSelected?.stock}</span>
      <p>${itemSelected?.price}</p>
      <div>
        <button onClick={handleNavigation}>Terminar mi compra</button>
        <button onClick={addToCart}>Agregar al carrito</button>
        <ItemCount
          count={count}
          setCount={setCount}
          stock={itemSelected?.stock}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
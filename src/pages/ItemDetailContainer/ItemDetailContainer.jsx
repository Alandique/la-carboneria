import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState([null]);
    const {id} = useParams();
    
    const fetchProduct =() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((Response) => Response.json())
        .then ((producto) =>setItemSelected(producto))
        .catch ((error) => console.log(error));
        
    };

useEffect (() => {
    fetchProduct();
}, [id]);

  return (
    <div>
      {id && (
        <div className='item-detail-container'>
       <ItemDetail  itemSelected={itemSelected} />
    </div>
      )}
      </div>
  );
};

export default ItemDetailContainer